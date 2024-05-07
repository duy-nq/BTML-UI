import React from "react";

export default function ALF(props) {
    return (
        <>
            <div style={{width: '100%', height: '100%', padding: 10, background: '#F2F4FE', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: '#535FC4', fontSize: 24, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                    {props.content}
                </div>
            </div>
        </>
    );
}