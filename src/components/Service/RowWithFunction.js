import React from "react";

export default function RowWithFunc(props) {
    return (
        <>
            <div style={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{height: 'auto', paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex'}}>
                    <div style={{width: 249, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.service}</div>
                    <div style={{width: 338, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.ac}</div>
                    <div style={{width: 21, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.quantity}</div>
                    <div style={{width: 324, alignSelf: 'stretch', textAlign: 'center', color: '#FF0000', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>REMOVE</div>
                </div>
            </div>
        </>
    );
}