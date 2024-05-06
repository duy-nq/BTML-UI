import React from "react";
import MechanicAndTime from "./WhoWhen";
import HeaderRow from "./HeaderRow";

export default function ServiceDetails() {
    const basicInfo = {
        'name': 'Joshua Kimmich',
        'phone': '0147852369',
        'from': '2024-02-03 17:00:00',
        'to': '2024-02-03 18:15:00'
    }
    
    return (
        <>
        <div style={{width: '100%', height: '100%', background: 'rgba(106.58, 135.72, 239.05, 0.73)', borderRadius: 53, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 80, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', paddingTop: 17, paddingRight: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 23, display: 'inline-flex'}}>
                <div style={{width: 48, height: 48, position: 'relative'}}>
                    <img src="close.svg" alt="Close Icon"/>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 26, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', height: 58, textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>SERVICE DETAILS</div>
            </div>
            <MechanicAndTime
                name={basicInfo.name}
                phone={basicInfo.phone}
                from={basicInfo.from}
                to={basicInfo.to}
            />
            <HeaderRow></HeaderRow>
        </div>
        </>
    );
}