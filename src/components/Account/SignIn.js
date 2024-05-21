import React, { useEffect, useState } from "react";
import { Button } from "../Basic/Button";
import TextInputS1 from "../Basic/Input";
import './Style.css'
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    var apilink = 'http://localhost:8000/api/v1/token'

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('gmail');
    }, []);

    async function login() {        
        try {
            console.log("Request URL:", apilink); // Log the request URL before sending the request
            const response = await fetch(apilink, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'Username': username, 'Password': password })
            });
        
            if (!response.ok) {
                alert('Failed to login! Please check your username and password!')
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('gmail', username);
                navigate('/customer')
            }
        } catch (error) {
            console.log('Failed to login');
        }        
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const closeSignIn = () => {
        document.querySelector('.popup').style.display = "none"
        console.log('imhere')
    };

    // Using API here to login
    const handelSubmit = () => {
        login()
    }
    
    return(
        <div className="signin" style={{scale:'80%', zIndex:999 , width: '800', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                <div onClick={closeSignIn} style={{width: 48, height: 48, position: 'relative'}}>
                    <img src="close.svg" alt="Close Icon"/>
                </div>
            </div>
            <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>SIGN IN</div>
            </div>
            <div style={{width: 736, height: 75, justifyContent: 'center', alignItems: 'center', gap: 70, display: 'inline-flex'}}>
                <div style={{width: 306, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>CUSTOMER</div>
                <div style={{width: 0, height: 61.50, border: '2px black solid'}}></div>
                <div style={{width: 306, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>MECHANIC</div>
            </div>
            <TextInputS1
                id='username'
                label='Username'
                type='text'
                font='Inria Sans'
                onChange={handleUsernameChange}
            />
            <TextInputS1
                id='password'
                label='Password'
                type='password'
                font='Verdana'
                onChange={handlePasswordChange}
            />            
            <div style={{alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Forget your password?</div>
            </div>
            <Button content="Sign In" onClick={handelSubmit}/>
        </div>
    );
}