import React from "react";

export default function Button01(props) {
    return (
        <>
            <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
                <button 
                    style={{padding: 10, background: '#BCFFBA', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.3s ease'}}
                    onMouseOver={(e) => {e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.cursor = 'pointer'}}
                    onMouseOut={(e) => {e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.cursor = 'default'}}
                    onClick={props.func}
                >
                    <div style={{width: 138, textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.name}</div>
                </button>
            </div>
        </>
    );
}