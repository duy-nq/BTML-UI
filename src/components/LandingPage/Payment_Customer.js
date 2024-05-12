import React from "react";
import ALH from "../Basic/Header_AfterLogin";
import ALF from "../Basic/Footer_AfterLogin";
import Payment from "./Payment";

export default function CustomerPayment() {
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='BACK TO HOME'
                    name='Pham Quoc Viet'
                />
                <Payment/>
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}