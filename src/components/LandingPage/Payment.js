import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowWithAction from "./Row_WithAction";
import RowWithNotification from "./Row_WithNotification";

export default function Payment() {
    let services = ['Cleaning', 'Repairing', 'Checking']

    return (
        <>
            <div id='payment' style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>All about your payment!</div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Unpaid Request</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='ACTION'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowWithAction
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            action='Pay now!'
                            color='#FFAF61'
                        />
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Ongoing Request...</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='STATUS'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowWithNotification
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            action='10% prepaid done, keep calm!'
                            color='#FFDB5C'
                            message="Currently, there's nothing here!"
                        />
                </div>
                <div style={{width: 1145, color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Deal Done!</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='DATE TIME'
                        col_3='SERVICE(S)'
                        col_4='COMPLETED AT'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowWithAction
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            action='04/05/2024 - 17:25:43'
                            color='#C3FF93'
                        />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                        <RowWithAction
                            id='1'
                            time='27/11/2023 17:15:00'
                            services={services}
                            action='08/05/2024 - 16:25:43'
                            color='#C3FF93'    
                        />
                </div>
            </div>
        </>
    );
}