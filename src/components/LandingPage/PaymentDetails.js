import React from "react";
import HeaderPD from "./Header_PD";
import RowPD from "./Row_PD";
import Button01 from "../Basic/Button_01";

export default function PaymentDetails() {
    
    const payItNow = () => {
        if (window.confirm('Xác nhận thanh toán?')) {
            window.open('https://example.com', '_blank')
        }
        else {
            return;
        }
    }
    
    return(
        <>
            <div style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Maintenance Charge</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderPD
                        col_1='#'
                        col_2='SERVICE'
                        col_3='PRICE'
                        col_4='QUANTITY'
                        col_5='TOTAL'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                    <RowPD
                        id='1'
                        service='Repairing'
                        price={250000}
                        quantity={2}
                    />   
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Add-on fee</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderPD
                        col_1='#'
                        col_2='SPARE PART'
                        col_3='PRICE'
                        col_4='QUANTITY'
                        col_5='TOTAL'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                    <RowPD
                        id='1'
                        service='Cooling main-board'
                        price={250000}
                        quantity={2}
                    />   
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Summary</div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Total cost: 
                </div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Prepayment: 
                </div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Balance Due:
                </div>
                <div style={{paddingTop: 20}}>
                    <Button01 name='Pay now!' func={payItNow}></Button01>
                </div>
            </div>
        </>
    );
}