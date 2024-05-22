import React, { useEffect, useState } from "react";
import { Button } from "../Basic/Button";
import TextInputS1 from "../Basic/Input";
import './Style.css'
import { useNavigate } from "react-router-dom";


export default function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('gmail');
        localStorage.removeItem('IdNV');
        localStorage.removeItem('IdKH');
        localStorage.removeItem('HoTen');
    },[]);

    const navigate = useNavigate()

    var apilink = 'http://localhost:8000/api/v1/token'
    var resetNV = 'http://localhost:8000/api/v1/nhanvien/reset/'
    var resetKH = 'http://localhost:8000/api/v1/khachhang/reset/'

    async function login() {        
        try {
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

                const link = 'http://localhost:8000/api/v1/users/me' + '?token=' + localStorage.getItem('token');

                fetch(link).then(response => response.json()).then(data => {
                    if (data.IdNV !== undefined) {
                        console.log(data.IdNV)
                        localStorage.setItem('IdNV', data.IdNV);
                        localStorage.setItem('HoTen', data.HoTen);
                        navigate('/mechanic')
                    } else if (data.IdKH !== undefined) {
                        localStorage.setItem('IdKH', data.IdKH);
                        localStorage.setItem('HoTen', data.HoTen);
                        navigate('/customer')
                    }
                });
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

    const resetPassword = async() => {
        if (username === '') {
            alert('Please enter your email (username)!')
            return;
        }

        const api = 'http://localhost:8000/api/v1/reset-password'

        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': [username] })
        });

        if (!response.ok) {
            alert('Failed to reset password! Please check your email (username)!')
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            alert('Reset password successfully! Please check your mail inbox!')

            const pwd = await response.text();
            let real_pwd = pwd.slice(1, -1)

            // try both link to reset password, if one of them is not working, the other will work
            const change = await fetch(resetNV, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'Email': username, 'Password': real_pwd })
            });

            if (!change.ok) {
                console.log('Failed to reset password! Please check your email (username)!')
            } else {
                console.log('Reset successfully!')
                return;
            }

            const change01 = await fetch(resetKH, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'Email': username, 'Password': real_pwd })
            });

            if (!change01.ok) {
                throw new Error(`HTTP error! status: ${change01.status}`);
            } else {
                console.log('Reset successfully!')
            }
        }
    }

    const closeSignIn = () => {
        document.querySelector('.popup').style.display = "none"
    };

    const handelSubmit = () => {
        login()
    }
    
    return(
        <div className="signin" style={{zIndex:999 , width: '1000', height: '800', paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 33, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                <div onClick={closeSignIn} style={{width: 48, height: 48, position: 'relative'}}>
                    <img src="close.svg" alt="Close Icon"/>
                </div>
            </div>
            <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>SIGN IN</div>
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
                <div onClick={resetPassword} style={{flex: '1 1 0', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inria Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Forget your password?</div>
            </div>
            <Button content="Sign In" onClick={handelSubmit}/>
        </div>
    );
}