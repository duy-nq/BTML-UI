import React from "react";

export default function ComboBox(props) {   
    return (
        <>
            <div style={{width: 400, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>{props.label}</div>
                <select 
                    id={props.id}
                    style={{border:'none', alignSelf: 'stretch', height: 62, background: 'rgba(147, 168, 244, 0.17)', borderRadius: 25, padding: '0px 20px 0px 20px', fontSize: 24, fontFamily: 'Inter',}} 
                    onChange={props.func}
                >
                    <option value="">Choose an option</option>
                    {props.list.map((item, index) => (
                        <option key={index+1} value={item[props.valueProp]}>
                            {item[props.nameProp]}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}