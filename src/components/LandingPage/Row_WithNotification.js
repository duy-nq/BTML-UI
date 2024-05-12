import React from "react";

export default function RowWithNotification(props) {
    return (
        <>
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 1145, height: 176, paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex', fontStyle:'italic', fontSize: 36, fontFamily: 'Inria Sans'}}>
                {props.message}
            </div>
        </div>
        </>
    );
}