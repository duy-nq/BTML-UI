import React from "react";
import { useState, useEffect } from "react";

export default function ServiceCard(props) {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Function to get the next quarter-hour time
        const getNextQuarterHour = () => {
            const now = new Date();
            now.setMilliseconds(0);
            now.setSeconds(0);
            const minutes = now.getMinutes();
            const remainder = minutes % 15;
            const nextQuarterHour = remainder === 0 ? minutes : minutes + (15 - remainder);
            now.setMinutes(nextQuarterHour);
            return now;
        };

        // Function to update the current time every second
        const updateCurrentTime = () => {
            const now = getNextQuarterHour();
            const date = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            setCurrentTime(`${date} - ${time}`);
        };

        // Update the current time initially
        updateCurrentTime();

        // Update the current time every second
        const interval = setInterval(updateCurrentTime, 1000);

        // Clean up the interval
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, background: props.color, borderTopLeftRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', height: 86, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex'}}>
                    <div style={{color: 'black', fontSize: 36, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>{props.title}</div>
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                        {props.title === 'RIGHT NOW!' ? currentTime : 'DD/MM/YYYY - HH:MM:SS'}
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>{props.payment}</div>
            </div>        
        </>
    );
}