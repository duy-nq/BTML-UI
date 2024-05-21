import React from "react";
import HeaderPD from "./Header_PD";
import RowPD from "./Row_PD";
import Button01 from "../Basic/Button_01";
import RowWithNotification from "./Row_WithNotification";
import { useState, useEffect } from "react";

export default function PaymentDetails() {
    const [listOfServices, setListOfServices] = useState([])
    const [listOfSpareParts, setListOfSpareParts] = useState([])
    const [prePayment, setPrePayment] = useState(0)
    const [link, setLink] = useState(null)

    const apiHDDV = "http://localhost:8000/api/v1/total-service/{id}/?IdPhieu=";
    const apiHDLK = "http://localhost:8000/api/v1/total-sp/{id}/?IdPhieu=";
    const apiThanhToan = "http://localhost:8000/api/v1/payment";
    const apiPhieuThongTin = "http://localhost:8000/api/v1/phieuthongtin/{id}?IdPhieu=";

    useEffect(() => {
        fetch(apiHDDV+localStorage.getItem('IdPhieu'))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result) 
                    setListOfServices(result)
                },
                (error) => {
                    console.log(error)
                }
            )
        fetch(apiHDLK+localStorage.getItem('IdPhieu'))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result) 
                    setListOfSpareParts(result)
                },
                (error) => {
                    console.log(error)
                }
            )
        fetch(apiPhieuThongTin+localStorage.getItem('IdPhieu'))
            .then(res => res.json())
            .then(
                (result) => {
                    try {
                        setPrePayment(result.bill[0].ThanhTien)
                    }
                    catch {
                        console.log('No prepayment')
                    } 
                },
                (error) => {
                    console.log(error)
                }
            )   
    }, []);

    const displayListOfServices = listOfServices && listOfServices.length > 0 ? 
    listOfServices.map((service, index) => (
        <RowPD
            key={index+1}
            id={index+1}
            service={service.Ten}
            price={service.DonGia}
            quantity={service.SoLuong}
        />
    )) :
    null;

    const displayListOfSP = listOfSpareParts && listOfSpareParts.length > 0 ? 
    listOfSpareParts.map((service, index) => (
        <RowPD
            key={index+1}
            id={index+1}
            service={service.Ten}
            price={service.DonGia}
            quantity={service.SoLuong}
        />
    )) :
    null;

    const totalCost = 
    (listOfServices ? 
        listOfServices.reduce((total, service) => total + service.DonGia * service.SoLuong, 0) 
        : 0) 
    + 
    (listOfSpareParts && listOfSpareParts.length > 0 ? 
        listOfSpareParts.reduce((total, service) => total + service.DonGia * service.SoLuong, 0) 
        : 0);

    async function payment() {
        const response = await fetch(apiThanhToan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'IdPhieu': localStorage.getItem('IdPhieu'),
                'ThanhTien': displayListOfSP === null ? totalCost*0.15 : (totalCost-prePayment),
                'NoiDung': "Dat coc - " + localStorage.getItem('IdPhieu'),
            })
        });

        return response.text();
    };

    const payItNow = () => {
        if (window.confirm('Xác nhận thanh toán?')) {
            payment().then(data => {
                let temp = data.split('"')
                console.log(temp[1])
            })
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
                    {displayListOfServices}
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
                    {displayListOfSP === null ? <RowWithNotification message="Currently, there's nothing here!"/> : displayListOfSP}  
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Summary</div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Total cost: {totalCost} 
                </div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    {displayListOfSP === null ? 'Deposit: 15%' : 'Prepayment:' + prePayment}
                </div>
                <div style={{width: '-webkit-fill-available', color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Balance Due: {displayListOfSP === null ? totalCost*0.15 : totalCost-prePayment}
                </div>
                <div style={{paddingTop: 20}}>
                    <Button01 name='Pay now!' func={payItNow}></Button01>
                </div>
            </div>
        </>
    );
}