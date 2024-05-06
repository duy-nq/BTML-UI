import React from "react";
import './Box.css'

export default function TextInputS2(props) {
    return (
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, display: 'flex', width:props.width}}>
            <label htmlFor={props.id} style={{width: 'auto', textAlign: 'left', padding: '0px 0px 0px 20px', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.label}</label>
            <textarea spellCheck='false' className="textarea" id={props.id} style={{alignSelf: 'stretch', height: 'auto', background: 'white', borderRadius: 53, padding: 22, fontFamily: props.font, fontSize: 20, border: '2px solid black'}} type={props.type} onChange={props.onChange} rows={4} cols={1}></textarea>
        </div>
    );
}