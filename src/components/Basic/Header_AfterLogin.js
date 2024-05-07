import React from "react";

export default function ALH() {
    return (
        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            <div style={{width: 206, height: 103, padding: 6, background: 'rgba(217, 217, 217, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 120, height: 45, position: 'relative'}}>
                    <img style={{width: 137, height: 45, left: 0, top: 0, position: 'absolute'}} src="company.svg" alt="Company Logo"></img>
                </div>
                <div style={{alignSelf: 'stretch', flex: '1 1 0', textAlign: 'center', color: '#2E445C', fontSize: 32, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '500', wordWrap: 'break-word'}}>FastService</div>
            </div>
            <div style={{width: '100%', background: 'rgba(106.58, 135.72, 239.05, 0.09)', borderTopLeftRadius: 20, borderTopRightRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 28, display: 'inline-flex'}}>
                <div style={{width: 'fit-content', height: 44, justifyContent: 'center', alignItems: 'center', gap: 19, display: 'flex'}}>
                    <div style={{width: 222, alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>OUR SERVICES</div>
                    </div>
                    <div style={{width: 231, alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>MAKE REQUEST</div>
                    </div>
                    <div style={{width: 159, alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>PAYMENT</div>
                    </div>
                    <div style={{width: 157, alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>HISTORY</div>
                    </div>
                </div>
                <div style={{height: 54, justifyContent: 'flex-end', alignItems: 'center', gap: 2, display: 'flex'}}>
                    <div style={{height: 54, padding: 10, justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: '#5867EC', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>Hoang Trung Dung</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <img style={{width: 32, height: 32}} src="codicon_account.svg" alt="Account Logo"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}