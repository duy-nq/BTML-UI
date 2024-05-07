import React from "react";

export default function HeaderUpcoming() {
    return (
        <>
            <div style={{width: '100%', height: '100%', paddingTop: 6, paddingBottom: 6, borderTop: '1px black solid', borderBottom: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 71, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>#</div>
                <div style={{width: 249, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>DATE TIME</div>
                <div style={{width: 338, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>SERVICE(S)</div>
                <div style={{width: 324, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>MECHANIC</div>
            </div>
        </>
    );
}