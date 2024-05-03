import React from "react";
import './Button.css'

export function Button(props) {
    return (
    <div className="button-shape">
        <div className="button-text">{props.content}</div>
    </div>
    );
}