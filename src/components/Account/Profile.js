import React from "react";
import TextInputS1 from "../Basic/Input";
import { Button } from "../Basic/Button";

export default function YourProfile() {
    const witdhStyle = [
        '-webkit-fill-available',
        'normal'
    ]
    
    return (
        <React.Fragment>
            <div style={{width: '100%', height: '100%', padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 1200, height: 826, paddingLeft: 24, paddingRight: 24, paddingTop: 19, paddingBottom: 19, background: 'rgba(147, 168, 244, 0.56)', borderRadius: 53, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 33, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
                        <div style={{width: 48, height: 48, position: 'relative'}}>
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
                            />
                            <TextInputS1
                                id='account_type'
                                label='Account type'
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
                            /> 
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse',justifyContent:'space-between', gap: 10, alignSelf: 'flex-end', paddingTop: '10px'}}>
                        <Button content='Confirm'></Button>
                        <Button content='Change password'></Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}