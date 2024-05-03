import React from "react";
import { Address, Info } from "./Infomation";

export function Footer(props) {
    return (
        <div style={{width: '-webkit-fill-available', height: '100%', paddingLeft: 47, paddingRight: 47, paddingTop: 12, paddingBottom: 12, background: 'rgba(147, 168, 244, 0.56)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', borderRadius: '0 0 15px 15px'}}>
            <div style={{width: '100%', justifyContent: 'flex-end', alignItems: 'center', gap: 688, display: 'inline-flex'}}>
                <Address 
                    address='145/8 Lê Văn Thọ, Gò Vấp, TpHCM'
                    tel='0991 232 528 - 1900 61 16 61'
                    email='contact@fastservice.vn'
                />
                <Info content='Copyrights © 2024 duy-nq. All rights reserved'/>
            </div>
        </div>
    );
}