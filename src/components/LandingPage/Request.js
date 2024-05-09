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

    const handleIdChange = (event) => {
        setServiceId(event.target.value)
    }

    const handleModelChange = (event) => {
        setModel(event.target.value)
    }

    const handleAdd = () => {
        if (serviceId==='' || model==='') {
            alert('Please verify your option again before add to card!')
        }
        
        console.log(serviceId + ' - ' + model + ' - ' + document.getElementById('quantity').value)        
    }
      
    
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
                    <RowWithFunc
                        quantity='1'
                        service='Cleaning'
                        ac='LG F81KL-23'
                    />
                    <RowWithFunc
                        quantity='2'
                        service='Cleaning'
                        ac='Samsung S632-251 All in one'
                    />
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Click here to secure your order with payment!
                </div>
            </div>
        </>
    );
}