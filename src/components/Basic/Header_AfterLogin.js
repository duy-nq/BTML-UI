import React from "react";

export default function ALH(props) {   
    const handleFunction2 = () => {
        if (props.f2 === 'MAKE REQUEST')
        document.getElementById('rns').scrollIntoView({behavior: 'smooth'})
    }
    
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
                    <div style={{width: 'auto', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.f1}</div>
                    </div>
                    <div onClick={handleFunction2} style={{width: 'auto', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.f2}</div>
                    </div>
                    <div style={{width: 'auto', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.f3}</div>
                    </div>
                    <div style={{width: 'auto', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.f4}</div>
                    </div>
                </div>
                <div style={{height: 54, justifyContent: 'flex-end', alignItems: 'center', gap: 2, display: 'flex'}}>
                    <div style={{height: 54, padding: 10, justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: '#5867EC', fontSize: 28, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.name}</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <img style={{width: 32, height: 32}} src="codicon_account.svg" alt="Account Logo"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}