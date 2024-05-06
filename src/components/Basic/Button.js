import React from "react";
import './Button.css'

export function Button(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    
    return (
    <div className="button-shape">
        <div className="button-text" onClick={handleClick}>{props.content}</div>
    </div>
    );
}