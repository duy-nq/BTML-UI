import React from "react";
import HeaderUpcoming from "./Header_Upcoming";
import RowUpcomingSchedule from "./Row_UpS";
import { useState, useEffect } from 'react';
import RowWithNotification from "./Row_WithNotification";

export default function UpcomingSchedule() {
    let services = ['Cleaning', 'Repairing', 'Checking']

    const [schedule, setSchedule] = useState([]);
    const [display, setDisplay] = useState([]);
    const [onGoing, setOnGoing] = useState([]);
    const apiPhieu = 'http://localhost:8000/api/v1/nhanvien/phieu/{id}?IdNV=' + localStorage.getItem('IdNV');
      
    useEffect(() => {
        fetch(apiPhieu).then((res) => res.json()).then((data) =>{
            setSchedule(data)
        })
    }, []);

    useEffect(() => {
        if (schedule.length === 0) {
            return
        }  

        setDisplay(schedule.map((item, index) => {
            if (item.ThoiGian < new Date().toISOString()) {
                return null
            }
            
            return(
                <RowUpcomingSchedule
                    id={index + 1}
                    time={formatDate(item.ThoiGian)}
                    services={item.ListOfService}
                    location={item.DiaChi}
                />
            );
        }));

        const stime = new Date();
        const thirtyMinutesAfter = new Date(stime.getTime() + 28000000);
        const thirtyMinutesBefore = new Date(stime.getTime() + 16000000); // need to be 2...

        console.log(thirtyMinutesBefore.toISOString(), thirtyMinutesAfter.toISOString());

        setOnGoing(schedule.map((item, index) => {
            if (item.ThoiGian < thirtyMinutesAfter.toISOString() && item.ThoiGian > thirtyMinutesBefore.toISOString()) {
                localStorage.setItem('IdPhieu', item.IdPhieu)
                return(
                <RowUpcomingSchedule
                    id={index + 1}
                    time={formatDate(item.ThoiGian)}
                    services={item.ListOfService}
                    location={item.DiaChi}
                />
            )
        }
        }));

    }, [schedule.length]);

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
                        {onGoing[0] === undefined ? onGoing : <RowWithNotification message='No ongoing job'/>}
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
                        {display}
                    </div>
                </div>
            </div>
        </>
    );
}
