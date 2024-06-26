import React from "react";

export default function RowWithAction(props) {
    const handleClick = () => {
        if (props.active === false) return;
        alert('You have clicked on the action button!');
        localStorage.setItem('IdPhieu', props.idPhieu);
        window.open('/pd', '_blank');
    }
    
    return (
        <>
        <div style={{opacity:0.9, background: props.color,width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 1145, height: 176, paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 71, display: 'flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.id}</div>
                <div style={{width: 249, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>{props.time}</div>
                <div style={{width: 338, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>
                    {props.services.map((item) => (
                        <>
                            {item}
                            <br></br>
                        </>
                    ))}
                </div>
                <div onClick={handleClick} style={{width: 324, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>
                    {props.action}
                </div>
            </div>
        </div>
        </>
    );
}