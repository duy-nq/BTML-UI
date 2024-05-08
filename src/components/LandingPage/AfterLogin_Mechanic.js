import React from "react";
import ALH from "../Basic/Header_AfterLogin";
import UpcomingContent from "./Upcoming";
import ALF from "../Basic/Footer_AfterLogin";

export default function AfterLoginMechanic() {
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='SCHEDULE'
                    f2='MAINTENANCE'
                    f3='FEEDBACK'
                    name='Pham Quoc Viet'
                />
                <UpcomingContent></UpcomingContent>
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}