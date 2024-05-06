import React, { useState } from "react";
import { Button } from "../Basic/Button";
import TextInputS1 from "../Basic/Input";
import './Style.css'

export default function SignIn() {
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleGmailChange = (event) => {
        setGmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    // Using API here to login
    const handelSubmit = () => {
        console.log(gmail + ' - ' + password + ' - ' + name)
    }
    
    return(
        <div style={{width: '800', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                <div style={{width: 48, height: 48, position: 'relative'}}>
                    <img src="close.svg" alt="Close Icon"/>
                </div>
            </div>
            <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>SIGN UP</div>
            </div>
            <div style={{width: 736, height: 75, justifyContent: 'center', alignItems: 'center', gap: 70, display: 'inline-flex'}}>
                <div style={{width: 306, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>CUSTOMER</div>
                <div style={{width: 0, height: 61.50, border: '2px black solid'}}></div>
                <div style={{width: 306, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>MECHANIC</div>
            </div>
            <TextInputS1
                id='name'
                label='Your Name'
                type='text'
                font='Inria Sans'
                onChange={handleNameChange}
            />
            <TextInputS1
                id='gmail'
                label='Gmail'
                type='text'
                font='Inria Sans'
                onChange={handleGmailChange}
            />
            <TextInputS1
                id='password'
                label='Password'
                type='password'
                font='Verdana'
                onChange={handlePasswordChange}
            />            
            <div style={{alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>
                    Hãy chắc chắn rằng bạn đồng ý với những điều khoản/chính sách của FastService trước khi đăng ký
                </div>
            </div>
            <Button content="Sign Up" onClick={handelSubmit}/>
        </div>
    );
}