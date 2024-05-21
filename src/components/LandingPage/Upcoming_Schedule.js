import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowUpcomingSchedule from "./Row_UpS";

export default function UpcomingSchedule() {
    let services = ['Cleaning', 'Repairing', 'Checking']
    
    return (
        <>
            <div style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Ongoing job...</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='LOCATION'
                    />
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowUpcomingSchedule
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            location='89/24 Co Giang, Phu Nhuan'
                        />
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>What's next?</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='LOCATION'
                    />
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowUpcomingSchedule
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            location='89/24 Co Giang, Phu Nhuan'
                        />
                        <RowUpcomingSchedule
                            id='2'
                            time='29/11/2023 09:45:00'
                            services={services}
                            location='85 Hoang Van Thu, Go Vap'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}