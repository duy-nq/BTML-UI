import React from "react";

export default function RowHistory(props) {
    return (
        <>
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: '1292.94px', height: 'fit-content', paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                    {props.id}
                </div>
                <div style={{width: 338, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                    {props.service}
                </div>
                <div style={{width: 200, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                    {props.ac}
                </div>
                <div style={{width: 200, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                    {props.mechanic}
                </div>
                <div style={{width: 250, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                    {props.point}
                </div>
            </div>
        </div>
        </>
    );
}