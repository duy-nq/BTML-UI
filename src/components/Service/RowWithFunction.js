import React from "react";
import { useState } from "react";

export default function RowWithFunc(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div id={props.id} style={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{height: 'auto', paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex'}}>
                    <div style={{width: 249, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.service}</div>
                    <div style={{width: 338, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.ac}</div>
                    <div style={{width: 21, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.quantity}</div>
                    <div 
                        style={{cursor: isHovered ? 'pointer':'default', width: 284, alignSelf: 'stretch', textAlign: 'center', color: '#FF0000', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}
                        onClick={props.func}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        REMOVE
                    </div>
                </div>
            </div>
        </>
    );
}