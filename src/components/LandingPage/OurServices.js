import React from "react";
import ServiceCard from "../Basic/Card_Service";

export default function ServiceDescription() {
    let listOfServices = [
        {
            "id": 1, 
            "name": "Cleaning", 
            "description": "Breathe fresh air with our meticulous cleaning. Eliminate dust and allergens for healthier indoor living.", 
            "price": 150000,
            "src": "cleaning.png"
        },
        {
            "id": 2, 
            "name": "Repairing", 
            "description": "Stay cool with our swift repairs. Resolve AC issues for uninterrupted comfort.", 
            "price": 250000,
            "src": "repairing.png"},
        {
            "id": 3, 
            "name": "Checking", 
            "description": "Ensure peak performance with our thorough checks. Detect and prevent problems early for smooth AC operation.", 
            "price": 150000,
            "src": "checking.png"},
        {
            "id": 4, 
            "name": "Something else", 
            "description": "Experience worry-free maintenance with our complete package. From cleaning to repairs, we've got you covered.", 
            "price": 400000,
            "src": "all-in-one.png"}
    ]

    const serviceCard = listOfServices.map((item) => {
        return(
            <ServiceCard
                title={item.name}
                description={item.description}
                price={item.price}
                src={item.src}
            />
        )
    })
    
    return (
        <>
            <div id='osv' style={{overflowX:'auto',transformOrigin:'right top', overflowY:'hidden', width: '1145px', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 77, display: 'inline-flex'}}>
                <div style={{color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Take a look about our services!</div>
                <div style={{alignSelf: 'self-start', flex: '1 1 0', justifyContent: 'center', alignItems: 'center', gap: 55, display: 'inline-flex'}}>
                    {serviceCard}
                </div>
            </div>
        </>
    );
}