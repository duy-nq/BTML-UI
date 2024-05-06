import React, { useState } from "react";
import { Button } from "../Basic/Button";
import TextInputS2 from "../Basic/TextBox";
export default function Feedback() {
    const [comment, setComment] = useState('')

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    // Using API here to login
    const handelSubmit = () => {
        console.log(comment)
    }
    
    return (
        <React.Fragment>
            <div style={{width: '50%', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                    <div style={{width: 48, height: 48, position: 'relative'}}>
                        <img src="close.svg" alt="Close Icon"/>
                    </div>
                </div>
                <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>FEEDBACK</div>
                </div>
                <TextInputS2
                    id='comment'
                    label='Your thought about this service'
                    type='text'
                    font='Inter'
                    onChange={handleCommentChange}
                />
                <Button content="Send it" onClick={handelSubmit}/>
            </div>
        </React.Fragment>
    );

}