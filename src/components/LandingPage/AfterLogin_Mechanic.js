import React from "react";
import ALH from "../Basic/Header_AfterLogin";
import ALF from "../Basic/Footer_AfterLogin";
import UpcomingSchedule from "./Upcoming_Schedule";

export default function AfterLoginMechanic() {
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='SCHEDULE'
                    f2='MAINTENANCE'
                    f3='FEEDBACK'
                    name={localStorage.getItem('HoTen')}
                />
                <UpcomingSchedule/>
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}