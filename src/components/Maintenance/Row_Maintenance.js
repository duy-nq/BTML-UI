import React, { useState } from "react";

export default function RowMaintenance(props) {
    const [isHovered, setIsHovered] = useState(false)
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOnClick = () => {       
        props.getTask(props.service + ': ' + props.ac + ' (' + props.id + ')')
        localStorage.setItem("current", props.IdCT)
        localStorage.setItem("sub", props.id)
    };
    
    return (
        <>
        <div id={props.id} style={{background: props.color,width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 1145, height: 'auto', paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.id}</div>
                <div style={{width: 249, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.service}</div>
                <div style={{width: 338, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>
                    {props.ac}
                </div>
                <div 
                    style={{cursor: isHovered ? 'pointer':'default', width: 324, textAlign: 'center', color: isHovered ? 'blue':'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}
                    onClick={handleOnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {props.action}
                </div>
            </div>
        </div>
        </>
    );
}