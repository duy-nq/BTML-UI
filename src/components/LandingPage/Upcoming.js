import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowUpcoming from "./Row_Upcoming";
import { useState, useEffect } from "react";
import RowWithNotification from "./Row_WithNotification";

export default function UpcomingContent() {
    const [data, setData] = useState([]);
    const [listOfServices, setListOfServices] = useState([])
    const [listOfMechanics, setListOfMechanics] = useState([])

    const apiKH = 'http://localhost:8000/api/v1/khachhang/{id}?IdKH=' + localStorage.getItem('IdKH');
    const apiDichVu = "http://localhost:8000/api/v1/dichvu";
    const apiNhanVien = "http://localhost:8000/api/v1/nhanvien";
    const date = new Date();

    useEffect(() => {
        fetch(apiDichVu).then((res) => res.json()).then((data) => 
            {
                setListOfServices(data)
            }
        );
        fetch(apiKH)
            .then(response => response.json())
            .then(data => {
                setData(data.requests);
            });
        fetch(apiNhanVien).then((res) => res.json()).then((data) =>{
            setListOfMechanics(data)
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

    function getServiceById(id) {       
        for (let i = 0; i < listOfServices.length; i++) {
            if (listOfServices[i].IdDV === id) {
                return listOfServices[i].Ten;
            }
        }
    }

    function getMechanicById(id) {
        for (let i = 0; i < listOfMechanics.length; i++) {
            if (listOfMechanics[i].IdNV === id) {
                return listOfMechanics[i].HoTen;
            }
        }
    }

    const displayData = data.map((item, index) => {        
        
        if (item.LichHen < new Date(date.getTime()+600000*6*7).toISOString()) {
            return null;
        }
        else {
            console.log(item)
        }

        if (item.TGBD !== null && item.TGKT !== null) {
            return null;
        }
        else {
            console.log('impass')
        }
        
        return (
            <RowUpcoming
                id={index + 1}
                time={formatDate(item.LichHen)}
                services={
                    item.service_detail.map((service) => {
                        return getServiceById(service.IdDV);
                    })
                }
                mechanics={
                    item.service_detail.map((service) => {
                        return getMechanicById(service.IdNV);
                    })
                }
            />
        );
    });
    
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
                        {displayData.every(item => item === null) ? <RowWithNotification message="Currently, there's nothing here!"/> : displayData}
                    </div>
                </div>
            </div>
        </>
    );
}
