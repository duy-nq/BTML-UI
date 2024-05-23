import React from "react";
import ServiceCard from "../Basic/Card_Service";
import { useState, useEffect } from "react";

export default function ServiceDescription() {
    const [listOfServices, setListOfServices] = useState([])

    const apiDichVu = "http://localhost:8000/api/v1/dichvu";

    useEffect(() => {
        fetch(apiDichVu).then((res) => res.json()).then((data) => 
            {
                setListOfServices(data)
            }
        );
    }, []);

    const serviceCard = listOfServices.map((item) => {
        return(
            <ServiceCard
                title={item.Ten}
                description={item.MoTa}
                price={item.DonGia}
                src={item.HinhAnh}
            />
        )
    })
    
    return (
        <>
            <div id='osv' style={{overflowX:'auto',transformOrigin:'right top', overflowY:'hidden', width: '1145px', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 77, display: 'inline-flex'}}>
                <div style={{color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Take a look at our services!</div>
                <div style={{alignSelf: 'self-start', flex: '1 1 0', justifyContent: 'center', alignItems: 'center', gap: 55, display: 'inline-flex'}}>
                    {serviceCard}
                </div>
            </div>
        </>
    );
}