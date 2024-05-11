import React from "react";

export default function ServiceCard(props) {
    return (
        <>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', justifyContent: 'center', alignItems: 'center', gap: 55, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flex: '1 1 0', padding: 15, borderTopLeftRadius: 40, borderTopRightRadius: 40, border: '4px black solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                            <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                <div style={{flex: '1 1 0', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{props.title}</div>
                            </div>
                        </div>
                        <img style={{alignSelf: 'stretch', borderRadius: 40}} src={props.src} alt="Just an image"/>
                        <div style={{alignSelf: 'stretch', paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{flex: '1 1 0', color: 'black', fontSize: 36, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>{props.description}</div>
                        </div>
                        <div style={{alignSelf: 'stretch', height:'-webkit-fill-available', paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
                            <div style={{flex: '1 1 0', color: 'black', fontSize: 48, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '500', wordWrap: 'break-word'}}>{props.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}