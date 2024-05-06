import React from "react";

export default function MechanicAndTime(props) {
    return (
        <>
            <div style={{width: '-webkit-fill-available', justifyContent: 'center', alignItems: 'center', gap: 475, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>MECHANIC</div>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>{props.name}</div>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>{props.phone}</div>
                </div>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>WORKING TIME</div>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>{props.from}</div>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>{props.to}</div>
                </div>
            </div>
        </>
    );
}