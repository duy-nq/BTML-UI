import React from "react";
import HeaderPD from "./Header_PD";
import RowHistory from "./Row_History";
import { useState, useEffect } from "react";
export default function History() {  
    const [data, setData] = useState([]);
    

    useEffect(() => {

    }, []);
    
    return(
        <>
            <div style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Your completed service requests!</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderPD
                        col_1='#'
                        col_2='SERVICE'
                        col_3='AC'
                        col_4='MECHANIC'
                        col_5='POINT'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                    <RowHistory
                        id='1'
                        service='Repairing'
                        ac='LG Inverter 16-OKDCN'
                        mechanic='Pham Duc Viet'
                        point={85}
                    />
                    <RowHistory
                        id='2'
                        service='Cleaning'
                        ac='Daikin 2HWP'
                        mechanic='Pham Duc Viet'
                        point={95}
                    />
                    <RowHistory
                        id='3'
                        service='Checking'
                        ac='LG Inverter 16-OKDCN'
                        mechanic='Ngo Tung Quoc'
                        point={100}
                    />   
                </div>
            </div>
        </>
    );
}