import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowWithAction from "./Row_WithAction";
import RowWithNotification from "./Row_WithNotification";
import { useState, useEffect } from "react";

export default function Payment() {
    let services = ['Cleaning', 'Repairing', 'Checking']

    const [data, setData] = useState([]);

    const apiHD = 'http://localhost:8000/api/v1/khachhang/hoadon/{id}?IdKH=' + localStorage.getItem('IdKH');

    useEffect(() => {
        fetch(apiHD)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    function formatDate(dateString) {
        // Create a new Date object from the input date string
        const date = new Date(dateString);
    
        // Extract the day, month, and year
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
    
        // Extract the hours and minutes
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
    
        // Format the date and time as required
        const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    
        return formattedDate;
    }

    const list01 = data.map((item, index) => {
        if (item.IsBT !== 1) return;
        
        return (
            <RowWithAction
                id={index + 1}
                idPhieu={item.IdPhieu}
                time={formatDate(item.LichHen)}
                services={item.DichVu}
                action='Pay now!'
                color='#FFAF61'
                active={true}
            />
        )
    });

    const list00 = data.map((item, index) => {
        if (item.IsBT !== 0) return;
        
        return (
            <RowWithAction
                id={index + 1}
                time={formatDate(item.LichHen)}
                services={item.DichVu}
                action='15% prepaid done, keep calm!'
                color='#FFDB5C'
                message="Currently, there's nothing here!"
                active={false}
            />
        )
    })

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
                    {list01}
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
                    {list00}
                </div>
            </div>
        </>
    );
}