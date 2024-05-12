import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowUpcoming from "./Row_Upcoming";

export default function UpcomingContent() {
    let services = ['Cleaning', 'Repairing', 'Checking']
    let mechanics = ['Joe J.', 'Wesley O.']
    
    return (
        <>
            <div style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Upcoming...</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='MECHANIC(S)'
                    />
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowUpcoming
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            mechanics={mechanics}
                        />
                        <RowUpcoming
                            id='2'
                            time='29/11/2023 09:45:00'
                            services={services}
                            mechanics={mechanics}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
