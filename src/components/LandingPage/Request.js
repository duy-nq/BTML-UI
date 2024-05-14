import React, { useState, useEffect } from "react";
import ServiceCard from "../Basic/Card";
import ComboBox from "../Basic/ComboBox";
import NumberBox from "../Basic/NumberBox";
import Button01 from "../Basic/Button_01";
import RowWithFunc from "../Service/RowWithFunction";
import DateTime from "../Basic/DateTimePicker";

export default function RequestAndService() {    
    let listOfServices = [
        {"id": 1, "name": "Cleaning"},
        {"id": 2, "name": "Repairing"},
        {"id": 3, "name": "Checking"},
        {"id": 4, "name": "Something else"}
    ]
      
    let listOfAC = [
        {"id": 1, "model": "TCL Inverter 1 HP TAC-09CSD/XAB1I"},
        {"id": 2, "model": "Nagakawa Inverter 1 HP NIS-C09R2T28"},
        {"id": 3, "model": "Casper Inverter 1.5 HP GC-12IS35"},
        {"id": 4, "model": "Daikin Inverter 1 HP ATKB25YVMV"}
    ]

    const [serviceId, setServiceId] = useState('')
    const [model, setModel] = useState('')
    const [listOfRequests, setList] = useState([])

    const [isHovered, setIsHovered] = useState(false);
    const [isPicking, setIsPicking] = useState(false)

    const [currentTime, setCurrentTime] = useState('');
    const [customizedTime, setCustomizedTime] = useState('');

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

        // Function to update the current time every second
        const updateCurrentTime = () => {
            const now = getNextQuarterHour();
            const date = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            setCurrentTime(`${date} - ${time}`);
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
        var numId = parseInt(id)
        
        for (let i = 0; i < listOfServices.length; i++) {
            if (listOfServices[i].id === numId) {
                return listOfServices[i].name;
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

        const existingRequestIndex = listOfRequests.findIndex((item) => 
            item.service === request.service && item.model === request.model
        )        

        if (existingRequestIndex !== -1) {
            const updatedRequests = [...listOfRequests]
            updatedRequests[existingRequestIndex].quantity = request.quantity
            setList(updatedRequests)
        }
        else {
            request.id = listOfRequests.length+1
            setList([...listOfRequests, request])
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
        
        if (window.confirm('Redirect to payment page, cannot go back to this step! Are you sure?'))
            window.open('https://example.com', '_blank')
    }

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
                        payment='10% prepaid of the total bill'
                        color='rgba(174, 217, 224, 0.56)'
                        func={rightNow}
                    />
                    <ServiceCard
                        title='PERSONALIZE'
                        time= {customizedTime==='' ? 'DD/MM/YYYY - HH:MM' : customizedTime}
                        payment='20% prepaid of the total bill'
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
                            nameProp='name'
                            valueProp='id'
                            func={handleIdChange}
                        />
                        <ComboBox
                            label='AC Type'
                            list={listOfAC}
                            nameProp='model'
                            valueProp='model'
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