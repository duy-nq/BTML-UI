import React, { useState } from "react";
import { Button } from "../Basic/Button";
import TextInputS1 from "../Basic/Input";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleOPChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNPChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleCPChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const closePassword = () => {
        document.querySelector('.popup').style.display = "none"
    }

    // Using API here to login
    const handelSubmit = () => {
        console.log(oldPassword + ' - ' + newPassword + ' - ' + confirmPassword)
    }
    
    return (
        <React.Fragment>
            <div style={{width: '800', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                    <div onClick={closePassword} style={{width: 48, height: 48, position: 'relative'}}>
                        <img src="close.svg" alt="Close Icon"/>
                    </div>
                </div>
                <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>CHANGE PASSWORD</div>
                </div>
                <TextInputS1
                    id='oldPassword'
                    label='Old Password'
                    type='password'
                    font='Verdana'
                    onChange={handleOPChange}
                />
                <TextInputS1
                    id='newPassword'
                    label='New password'
                    type='password'
                    font='Verdana'
                    onChange={handleNPChange}
                />
                <TextInputS1
                    id='confirmPassword'
                    label='Confirm password'
                    type='password'
                    font='Verdana'
                    onChange={handleCPChange}
                />            
                <Button content="Change" onClick={handelSubmit}/>
            </div>
        </React.Fragment>
    );

}