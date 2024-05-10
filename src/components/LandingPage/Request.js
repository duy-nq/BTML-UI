import React, { useState } from "react";
import ServiceCard from "../Basic/Card";
import ComboBox from "../Basic/ComboBox";
import NumberBox from "../Basic/NumberBox";
import Button01 from "../Basic/Button_01";
import RowWithFunc from "../Service/RowWithFunction";

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

    const handleIdChange = (event) => {
        setServiceId(event.target.value)
    }

    const handleModelChange = (event) => {
        setModel(event.target.value)
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
                        time='09/05/2024 - 17:00:00'
                        payment='10% prepaid of the total bill'
                        color='rgba(174, 217, 224, 0.56)'
                    />
                    <ServiceCard
                        title='PERSONALIZE'
                        time='DD/MM/YYYY - HH:MM:SS'
                        payment='20% prepaid of the total bill'
                        color='rgba(159, 160, 195, 0.56)'
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
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Click here to secure your order with payment!
                </div>
            </div>
        </>
    );
}