import React from "react";

export default function TextInputS1(props) {
    return (
        <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, display: 'flex'}}>
            <label htmlFor={props.id} style={{width: 143, textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.label}</label>
            <input id={props.id} style={{alignSelf: 'stretch', height: 60, background: 'white', borderRadius: 53, padding: 22, fontFamily: props.font, fontSize: 24, border: '2px solid black'}} type={props.type} onChange={props.onChange}></input>
        </div>
    );
}