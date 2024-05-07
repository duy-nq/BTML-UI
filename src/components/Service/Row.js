import React from "react";

export default function Row(props) {
    return (
        <>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 76, display: 'inline-flex', borderTop: '2px solid black'}}>
                <div style={{width: 49, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.id}</div>
                <div style={{width: 216, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.name}</div>
                <div style={{width: 175, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.company}</div>
                <div style={{width: 104, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.number}</div>
                <div style={{width: 138, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.price}</div>
                <div style={{width: 149, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>{props.total}</div>
            </div>
        </>
    );
}