import React from "react";

export default function DateTime(props) {
    const closeForm = () => {
        document.querySelector('.popup').style.display = "none"
    };
    
    return (
        <>
            <div style={{scale:'80%', zIndex:999 , width: '800', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                    <div onClick={closeForm} style={{width: 48, height: 48, position: 'relative'}}>
                        <img src="close.svg" alt="Close Icon"/>
                    </div>
                </div>
                <input onChange={props.onChange} type="datetime-local" style={{background:'none', fontSize: 48, fontFamily: 'Inria Sans', width: "600px", height: 'auto', padding: "5px", borderRadius: "5px" }}></input>
            </div>
        </>
    );
}
