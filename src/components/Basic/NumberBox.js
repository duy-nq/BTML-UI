import React, { useState } from "react";

export default function NumberBox(props) {
    const [quantity, setQuantity] = useState(1)

    const handleChange = (event) => {
        setQuantity(event.target.value)
    }       
    
    return (
        <>
            <div style={{width: 100, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>{props.label}</div>
                <input 
                    id="quantity"
                    style={{caretColor: 'transparent', alignSelf: 'stretch', height: 62, background: 'rgba(147, 168, 244, 0.17)', borderRadius: 25, fontSize: 24, fontFamily: 'Inria Sans', paddingLeft:20}} 
                    type="number"
                    min={1}
                    max={10}
                    onKeyDown={(e) => e.preventDefault()}
                    onChange={handleChange}
                    value={quantity}
                ></input>
            </div>
        </>
    );
}