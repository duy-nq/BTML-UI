import React from "react";

export default function TextInputS1(props) {
    return (
        <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, display: 'flex', width:props.width}}>
            <label htmlFor={props.id} style={{width: 'auto', textAlign: 'left', padding: '0px 0px 0px 20px', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.label}</label>
            <input readOnly={props.read} id={props.id} style={{alignSelf: 'stretch', height: 60, background: 'white', borderRadius: 53, padding: 22, fontFamily: props.font, fontSize: 24, border: '2px solid black'}} type={props.type} onChange={props.onChange}></input>
        </div>
    );
}
