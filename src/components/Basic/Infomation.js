import React from "react";

export function Address(props) {
    return(
        <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{color: '#535FC4', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>TRỤ SỞ CHÍNH</div>
            <div style={{height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div style={{width: 13, height: 19, background: '#1A1B1F'}}></div>
                    <div style={{width: 250, height: 19, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{flex: '1 1 0', color: '#535FC4', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{props.address}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 11, display: 'inline-flex'}}>
                    <div style={{width: 15, height: 15, background: 'black'}}></div>
                    <div style={{width: 217, height: 19, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{flex: '1 1 0', color: '#535FC4', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{props.tel}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 7, display: 'inline-flex'}}>
                    <div style={{width: 20, height: 19, position: 'relative'}}>
                        <div style={{width: 20.11, height: 13.30, left: 0.04, top: 2.15, position: 'absolute', background: 'black'}}></div>
                    </div>
                    <div style={{width: 178, height: 19, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{flex: '1 1 0', color: '#535FC4', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{props.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Info(props) {
    return (
        <div style={{width: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 21, display: 'inline-flex'}}>
            <img style={{width: 184, height: 69}} src="confirmation.png" alt="BCT" />
            <div style={{alignSelf: 'stretch', textAlign: 'right', color: '#535FC4', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{props.content}</div>
        </div>
    );
}