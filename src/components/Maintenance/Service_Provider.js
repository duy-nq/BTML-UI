import React, { useState } from "react";
import ComboBox from "../Basic/ComboBox";
import NumberBox from "../Basic/NumberBox";
import Button01 from "../Basic/Button_01";
import RowWithFunc from "../Service/RowWithFunction";
import TextInputS1 from "../Basic/Input";
import { useEffect } from "react";

export default function ServiceProvider(props) {    
    let listOfProviders = [
        {"id": 1, "name": "LG"},
        {"id": 2, "name": "Daikin"},
        {"id": 3, "name": "Nagakawa"},
        {"id": 4, "name": "Casper"}
    ]
      
    let listOfSP = [
        {"id": 1, "prov": 1, "model": "Gas Tube 0.75L"},
        {"id": 2, "prov": 1, "model": "Mainboard"},
        {"id": 3, "prov": 2, "model": "Filter 2 layers"},
        {"id": 4, "prov": 3, "model": "Fan 100kJ"},
        {"id": 5, "prov": 4, "model": "Fan 100kJ"}
    ]

    const [serviceId, setServiceId] = useState('')
    const [model, setModel] = useState('')
    const [serial, setSerial] = useState('')
    const [listOfAddOn, setList] = useState([])
    const [isHovered, setIsHovered] = useState(false)

    const [fileteredSP, setSP] = useState([])

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleSerialChange = (event) => {
        setSerial(event.target.value)
    }

    useEffect(() => {
        document.getElementById('mtn').style.display='inline-flex'
        
        const sub = localStorage.getItem('sub');
        const existingItem = props.preData.find(item => item.sub.toString() === sub);

        console.log('imcallingyou', sub)
    
        if (existingItem) {
            const { Serial, Addon } = existingItem;
            setSerial(Serial);
            setList(Addon);
    
            // Update the input field directly without using getElementById
            const serialInput = document.getElementById('serial');
            if (serialInput) {
                serialInput.value = Serial;
            }
        }
    }, [props.task]);
    

    const handleSave = () => {
        if (serial === '') {
            alert('AC Serial must be filled as all cost!')
        }
        else if (props.task === 'Please choose a task to continue') {
            alert('Please select a service to continue!')
        }
        else {
            const data = {"IdCT": localStorage.getItem("current"), "Serial": serial, "Addon": listOfAddOn}
            props.func(data)

            alert('Add-on list is saved!')
            setList([])
            document.getElementById('serial').value = ''
            document.getElementById(localStorage.getItem('sub')).style.background='#CAF4FF'
            localStorage.setItem('sub', '')
            document.getElementById('mtn').style.display='none'
        }
    }

    const handleIdChange = (event) => {
        setServiceId(event.target.value)
        setModel('')
    }

    useEffect(() => {
        const filteredList = listOfSP.filter(sp => sp.prov === parseInt(serviceId));
        setSP(filteredList);
    }, [serviceId]);

    const handleModelChange = (event) => {
        setModel(event.target.value)
    }

    function getServiceById(id) {
        var numId = parseInt(id)
        
        for (let i = 0; i < listOfProviders.length; i++) {
            if (listOfProviders[i].id === numId) {
                return listOfProviders[i].name;
            }
        }
    }

    function getSPById(id) {
        var numId = parseInt(id)
        
        for (let i = 0; i < listOfSP.length; i++) {
            if (listOfSP[i].id === numId) {
                return listOfSP[i].model;
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
            "model": getSPById(model), 
            "quantity": parseInt(document.getElementById('quantity').value)
        }

        const existingRequestIndex = listOfAddOn.findIndex((item) => 
            item.service === request.service && item.model === request.model
        )        

        if (existingRequestIndex !== -1) {
            const updatedRequests = [...listOfAddOn]
            updatedRequests[existingRequestIndex].quantity = request.quantity
            setList(updatedRequests)
        }
        else {
            request.id = listOfAddOn.length+1
            setList([...listOfAddOn, request])
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
        const updatedRequests = listOfAddOn.filter(item => item.id !== id);
        setList(updatedRequests);
        reassignIds(updatedRequests);        
    }

    const displayedRows = listOfAddOn.map((item) => {
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
            <div id="mtn" style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 31, display: props.show ? 'inline-flex':'none'}}>
                <div style={{width: 1145, color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.task}</div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>AC Serial</div>
                <div>
                    <TextInputS1 id="serial" font='Inria Sans' onChange={handleSerialChange}></TextInputS1>
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Create your request(s)</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 19, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <ComboBox
                            label='Provider'
                            list={listOfProviders}
                            nameProp='name'
                            valueProp='id'
                            func={handleIdChange}
                        />
                        <ComboBox
                            label='Spare part'
                            list={fileteredSP}
                            nameProp='model'
                            valueProp='id'
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
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>List of spare part(s)</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'flex'}}>
                    {displayedRows}
                </div>
                <div 
                    style={{width: 1145, color: isHovered ? 'red':'black', cursor: isHovered ? 'pointer':'default',fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleSave}
                >
                    Click here to save!
                </div>
            </div>
        </>
    );
}