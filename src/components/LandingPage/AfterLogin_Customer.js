import React from "react";
import ALH from "../Basic/Header_AfterLogin";
import UpcomingContent from "./Upcoming";
import ALF from "../Basic/Footer_AfterLogin";
import RequestAndService from "./Request";

export default function AfterLogin() {
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='OUR SERVICES'
                    f2='MAKE REQUEST'
                    f3='PAYMENT'
                    f4='HISTORY'
                    name='Pham Quoc Viet'
                />  
                <UpcomingContent/>
                <RequestAndService/>
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}