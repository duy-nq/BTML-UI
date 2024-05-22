import React, { useEffect } from "react";
import TextInputS1 from "../Basic/Input";

export default function YourProfile() {
    const witdhStyle = [
        '-webkit-fill-available',
        'normal'
    ]

    const closeProfile = () => {
        document.querySelector('.popup').style.display = "none"
    }

    const apiNV = 'http://localhost:8000/api/v1/nhanvien/{id}?IdNV=' + localStorage.getItem('IdNV')
    const apiKH = 'http://localhost:8000/api/v1/khachhang/{id}?IdKH=' + localStorage.getItem('IdKH')

    useEffect(() => {       
        if (localStorage.getItem('IdNV') !== null) {
            fetch(apiNV).then(response => response.json()).then(data => {
                document.getElementById('user_id').value = data.IdNV
                document.getElementById('cccd').value = data.CCCD
                document.getElementById('name').value = data.HoTen
                document.getElementById('phone_number').value = data.SDT
                document.getElementById('address').value = data.DiaChi
                document.getElementById('email').value = data.Gmail
                document.getElementById('point').value = data.DiemDG
            });
        } else if (localStorage.getItem('IdKH') !== null) {
            fetch(apiKH).then(response => response.json()).then(data => {
                document.getElementById('user_id').value = data.IdKH
                document.getElementById('cccd').value = data.CCCD
                document.getElementById('name').value = data.HoTen
                document.getElementById('phone_number').value = data.SDT
                document.getElementById('address').value = data.DiaChi
                document.getElementById('email').value = data.Gmail
                document.getElementById('point').value = 'NONE'
            });
        }
    },[])

    const handleSubmit = async() => {
        if (window.confirm('Cập nhật dữ liệu của bạn?') === false) return
        
        const NhanVienJSON = JSON.stringify(
            { 
                'CCCD': document.getElementById('cccd').value,
                'HoTen': document.getElementById('name').value, 
                'DiaChi': document.getElementById('address').value, 
                'SDT': document.getElementById('phone_number').value, 
                'Gmail': document.getElementById('email').value,
                'DiemDG': document.getElementById('point').value,
                'IdNV': localStorage.getItem('IdNV'),
                'TrangThai': true
            })

        const KhachHangJSON = JSON.stringify({
            'CCCD': document.getElementById('cccd').value,
            'HoTen': document.getElementById('name').value, 
            'DiaChi': document.getElementById('address').value, 
            'SDT': document.getElementById('phone_number').value, 
            'Gmail': document.getElementById('email').value,
            'IdKH': localStorage.getItem('IdKH'),
        })

        console.log(NhanVienJSON)
        
        const response = await fetch(localStorage.getItem('IdNV') !== null ? apiNV : apiKH, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: localStorage.getItem('IdNV') !== null ? NhanVienJSON : KhachHangJSON
        });

        if (!response.ok) {
            alert('Failed to update profile! Please check your infomation!')
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            alert('Update profile successfully!')
            window.location.reload()
        }
    }
    
    return (
        <React.Fragment>
            <div style={{scale:'80%', width: '100%', height: '800px', padding: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 1200, height: 826, paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 33, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                        <div onClick={closeProfile} style={{width: 48, height: 48, position: 'relative'}}>
                            <img src="close.svg" alt="Close Icon"/>
                        </div>
                    </div>
                    <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>YOUR PROFILE</div>
                    </div>
                    <div style={{height: 466, width:'100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex'}}>
                            <TextInputS1
                                id='user_id'
                                label='User ID'
                                type='text'
                                font='Inria Sans'
                                width={witdhStyle[0]}
                                read={true}
                            />
                            <TextInputS1
                                id='cccd'
                                label='CCCD'
                                type='text'
                                font='Inria Sans'
                            />
                        </div>
                        <TextInputS1
                            id='name'
                            label='Name'
                            type='text'
                            font='Inria Sans'
                        />    
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <TextInputS1
                                id='phone_number'
                                label='Phone number'
                                type='text'
                                font='Inria Sans'
                            />  
                            <TextInputS1
                                id='address'
                                label='Address'
                                type='text'
                                font='Inria Sans'
                                width={witdhStyle[0]}
                            />  
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <TextInputS1
                                id='email'
                                label='Email'
                                type='text'
                                font='Inria Sans'
                                width={witdhStyle[0]}
                            /> 
                            <TextInputS1
                                id='point'
                                label='System point'
                                type='text'
                                font='Inria Sans'
                                read={true}
                            /> 
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse',justifyContent:'space-between', gap: 10, alignSelf: 'flex-end', paddingTop: '10px'}}>
                        <div className="button-shape">
                            <div className="button-text" onClick={handleSubmit}>Confirm</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}