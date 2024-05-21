import React, { useState, useEffect } from "react";
import ServiceCard from "../Basic/Card";
import ComboBox from "../Basic/ComboBox";
import NumberBox from "../Basic/NumberBox";
import Button01 from "../Basic/Button_01";
import RowWithFunc from "../Service/RowWithFunction";
import DateTime from "../Basic/DateTimePicker";

export default function RequestAndService() {    
    const [listOfServices, setListOfServices] = useState([])
    const [listOfAC, setListOfAC] = useState([])

    const apiDichVu = "http://localhost:8000/api/v1/dichvu";
    const apiAC = "http://localhost:8000/api/v1/maylanh";

    useEffect(() => {
        fetch(apiDichVu).then((res) => res.json()).then((data) => 
            {
                setListOfServices(data)
            }
        );

        fetch(apiAC).then((res) => res.json()).then((data) => 
            {
                setListOfAC(data)
            }
        );
    }, []);

    const [serviceId, setServiceId] = useState('')
    const [model, setModel] = useState('')
    const [listOfRequests, setList] = useState([])
    const [sendingList, setSendingList] = useState([])

    const [isHovered, setIsHovered] = useState(false);
    const [isPicking, setIsPicking] = useState(false)

    const [currentTime, setCurrentTime] = useState('');
    const [customizedTime, setCustomizedTime] = useState('');
    const [idPhieu, setIdPhieu] = useState(null)

    const apiPhieuThongTin = "http://localhost:8000/api/v1/phieuthongtin";
    const apiCTDV = "http://localhost:8000/api/v1/ctdv";

    useEffect(() => {
        // Function to get the next quarter-hour time
        const getNextQuarterHour = () => {
            const now = new Date();
            now.setMilliseconds(0);
            now.setSeconds(0);
            const minutes = now.getMinutes();
            const remainder = minutes % 15;
            const nextQuarterHour = remainder === 0 ? minutes : minutes + (15 - remainder);
            now.setMinutes(nextQuarterHour);
            return now;
        };
    
        // Function to format the date and time
        const formatDateTime = (date) => {
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
            return `${formattedDate} - ${formattedTime}`;
        };
    
        // Function to update the current time every second
        const updateCurrentTime = () => {
            const now = getNextQuarterHour();
            setCurrentTime(formatDateTime(now));
        };
    
        // Update the current time initially
        updateCurrentTime();
    
        // Update the current time every second
        const interval = setInterval(updateCurrentTime, 1000);
    
        // Clean up the interval
        return () => clearInterval(interval);
    }, []);
    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleIdChange = (event) => {
        setServiceId(event.target.value)
    }

    const handleModelChange = (event) => {
        setModel(event.target.value)
    }

    const handleTimeChange = (event) => {
        const inputDate = new Date(event.target.value)
        const formattedDateTime = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()} - ${inputDate.getHours().toString().padStart(2, '0')}:${inputDate.getMinutes().toString().padStart(2, '0')}`; // Format the datetime value
        setCustomizedTime(formattedDateTime);
    }

    const rightNow = () => {
        setCustomizedTime('')
        alert('RIGHT NOW! has been picked!')
    }

    const openPicker = (event) => {
        document.querySelector('.popup-time').style.display = 'flex';
        setIsPicking(true)

        alert('PERSONALIZE has been picked!')
    }

    function getServiceById(id) {       
        for (let i = 0; i < listOfServices.length; i++) {
            if (listOfServices[i].IdDV === id) {
                return listOfServices[i].Ten;
            }
        }
    }

    function getIdByAC(ac) {       
        for (let i = 0; i < listOfAC.length; i++) {
            if (listOfAC[i].Ten === String(ac)) {
                return listOfAC[i].IdML;
            }
        }
    }

    const handleAdd = () => {
        if (serviceId==='' || model==='') {
            alert('Please verify your option again before add to card!')
            return
        }

        let request = {
            "id": 0, 
            "service": getServiceById(serviceId), 
            "model": model, 
            "quantity": parseInt(document.getElementById('quantity').value)
        }

        let sRequest = {
            "id": 0, 
            "IdDV": serviceId, 
            "IdML": getIdByAC(model), 
            "SoLuong": parseInt(document.getElementById('quantity').value)
        }

        const existingRequestIndex = listOfRequests.findIndex((item) => 
            item.service === request.service && item.model === request.model
        )        

        if (existingRequestIndex !== -1) {
            const updatedRequests = [...listOfRequests]
            const updatedSendingList = [...sendingList]
            
            updatedRequests[existingRequestIndex].quantity = request.quantity
            updatedSendingList[existingRequestIndex].SoLuong = request.quantity
            
            setList(updatedRequests)
            setSendingList(updatedSendingList)
        }
        else {
            request.id = listOfRequests.length+1
            sRequest.id = sendingList.length+1
            setList([...listOfRequests, request])
            setSendingList([...sendingList, sRequest])
        }
    }

    const reassignIds = (requests) => {
        const updatedRequests = requests.map((item, index) => {
            return {
                ...item,
                id: index + 1
            };
        });
        setList(updatedRequests);
    }

    const selfDestroy = (id) => {
        const updatedRequests = listOfRequests.filter(item => item.id !== id);
        setList(updatedRequests);
        reassignIds(updatedRequests);        
    }   

    function isoDateTime(dt) {
        const parts = dt.split(" - ");
        const datePart = parts[0];
        const timePart = parts[1];
        const [day, month, year] = datePart.split("/");
        const [hour, minute] = timePart.split(":");

        return `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;
    }

    async function postPhieuThongTin() {
        try {
            const response = await fetch(apiPhieuThongTin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    'IdKH': localStorage.getItem('IdKH'), 
                    'LichHen': customizedTime !== '' ? isoDateTime(customizedTime) : isoDateTime(currentTime), 
                    'TrangThai': true, 
                })
            });

            console.log(JSON.stringify({ 
                'IdKH': localStorage.getItem('IdKH'), 
                'LichHen': customizedTime !== '' ? isoDateTime(customizedTime) : isoDateTime(currentTime), 
                'TrangThai': true, 
            }))

            if (!response.ok) {
                alert('Failed to create your request!')
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                const data = await response.json();
                setIdPhieu(data.IdPhieu)
            }
        } catch (error) {
            console.log('Failed to create your request!');
        }
    }

    async function postCTDV() {
        try {
            for (let i = 0; i < sendingList.length; i++) {
                const response = await fetch(apiCTDV, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        'IdPhieu': idPhieu, 
                        'IdML': sendingList[i].IdML, 
                        'IdDV': sendingList[i].IdDV, 
                        'SoLuong': sendingList[i].SoLuong, 
                    })
                });

                console.log(JSON.stringify({ 
                    'IdPhieu': idPhieu, 
                    'IdML': sendingList[i].IdML, 
                    'IdDV': sendingList[i].IdDV, 
                    'SoLuong': sendingList[i].SoLuong, 
                }));

                if (!response.ok) {
                    alert('Failed to create detail order!')
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }
        } catch (error) {
            console.log('Failed to create detail order!');
        }

        alert('Detail order has been created successfully!')
        localStorage.setItem('IdPhieu', idPhieu)
        setIdPhieu(null)
        window.open('http://localhost:3000/pd', '_blank')
        window.location.reload()        
    }

    const handlePayment = () => {      
        if (listOfRequests.length === 0) {
            alert('Please choose at least one service!')
            return;
        }

        if (customizedTime !== '') {
            alert('You are choosing PERSONALIZE plan: ' + customizedTime)
        }
        else {
            alert('You are choosing RIGHT NOW! plan: ' + currentTime)
        }
        
        if (window.confirm('Redirect to payment page, cannot go back to this step! Are you sure?')) {
            postPhieuThongTin()
        }
    }

    useEffect(() => {
        if (idPhieu) {
            postCTDV(idPhieu); // Call postCTDV when idPhieu changes
        }
    }, [idPhieu]);

    const displayedRows = listOfRequests.map((item) => {
        return (
            <RowWithFunc
                id={item.id}
                service={item.service}
                ac={item.model}
                quantity={item.quantity}
                func={() => selfDestroy(item.id)}
            />
        )
    })
      
    
    return (
        <>
            <div id="rns" style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 31, display: 'inline-flex'}}>
                <div style={{width: 1145, color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Tell us what you need—we're here to help!</div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Specify your preferred time?</div>
                <div style={{paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 101, display: 'inline-flex'}}>
                    <ServiceCard
                        title='RIGHT NOW!'
                        time={currentTime}
                        payment='15% prepaid of the total services'
                        color='rgba(174, 217, 224, 0.56)'
                        func={rightNow}
                    />
                    <ServiceCard
                        title='PERSONALIZE'
                        time= {customizedTime==='' ? 'DD/MM/YYYY - HH:MM' : customizedTime}
                        payment='15% prepaid of the total services'
                        color='rgba(159, 160, 195, 0.56)'
                        func={openPicker}
                    />
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Create your request(s)</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 19, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <ComboBox
                            label='Service'
                            list={listOfServices}
                            nameProp='Ten'
                            valueProp='IdDV'
                            func={handleIdChange}
                        />
                        <ComboBox
                            label='AC Type'
                            list={listOfAC}
                            nameProp='Ten'
                            valueProp='Ten'
                            func={handleModelChange}
                        />
                        <NumberBox
                            label='Quantity'
                        />
                    </div>
                    <Button01
                        name='ADD TO CART'
                        func={handleAdd}
                    />
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>List of service(s)</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'flex'}}>
                    {displayedRows}
                </div>
                <div 
                    style={{width: 1145, color: isHovered ? 'red':'black', cursor: isHovered ? 'pointer':'default',fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}
                    onClick={handlePayment}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Click here to secure your order with payment!
                </div>
                <div className="popup-time">
                    {isPicking&&<DateTime onChange={handleTimeChange}/>}
                </div>
            </div>
        </>
    );
}