import React from "react";

export default function ServiceCard(props) {   
    return (
        <>
            <div onClick={props.func} style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, background: props.color, borderTopLeftRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', height: 86, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex'}}>
                    <div style={{color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.title}</div>
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                        {props.time}
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.payment}</div>
            </div>        
        </>
    );
}