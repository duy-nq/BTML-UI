import React from "react";
import ALH from "../Basic/Header_AfterLogin";
import ALF from "../Basic/Footer_AfterLogin";
import PaymentDetails from "./PaymentDetails";

export default function PDCustomer(props) {
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='Request ID: 5526a9d4-cf32-4f91-8662-d516a0962ad7'
                    name='Pham Quoc Viet'
                />
                <PaymentDetails></PaymentDetails>
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}