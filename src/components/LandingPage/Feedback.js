import React from "react";
import HeaderPD from "./Header_PD";
import RowHistory from "./Row_History";

export default function Feedback() {  
    return(
        <>
            <div style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Self-reflection based on customers' feedback!</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderPD
                        col_1='#'
                        col_2='SERVICE'
                        col_3='AC'
                        col_4='DATE TIME'
                        col_5='POINT'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                    <RowHistory
                        id='1'
                        service='Repairing'
                        ac='LG Inverter 16-OKDCN'
                        mechanic='2024-03-04 17:20:00'
                        point={85}
                    />
                    <RowHistory
                        id='1'
                        service='Repairing'
                        ac='LG Inverter 16-OKDCN'
                        mechanic='2024-03-04 17:20:00'
                        point={85}
                    />   
                </div>
            </div>
        </>
    );
}