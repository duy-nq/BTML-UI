import React, {useState} from "react";
import { Button } from "./Button";
import SignIn from "../Account/SignIn";

export default function Header() {
    const [isSignInOpen, setIsOpen] = useState(false)

    const handleSignInClick = () => {
        setIsOpen(true);
    };
    
    return (
        <div style={{width:'-webkit-fill-available', height: '120px', border: '2px rgba(106.58, 135.72, 239.05, 0.73) solid', justifyContent: 'center', alignItems: 'center', gap: '277px', display: 'inline-flex', borderRadius: '15px 15px 0 0'}}>
            <div style={{width: '381px', height: '87px', padding: '6px', background: 'rgba(217, 217, 217, 0)', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: '167px', height: '45px', position: 'relative'}}>
                    <img style={{width: '137px', height: '45px', left: '0px', top: '0px', position: 'absolute'}} src="company.svg" alt="Company Logo" />
                </div>
                <div style={{flex: '1 1 0', alignSelf: 'center', textAlign: 'right', color: '#2E445C', fontSize: '32px', fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 500, wordWrap: 'break-word'}}>FastService</div>
            </div>
            <div style={{flex: '1 1 0', height: '55px', paddingLeft: '22px', paddingRight: '22px', justifyContent: 'center', alignItems: 'center', gap: '52px', display: 'flex'}}>
                <Button content="About Us" />
                <Button content="Sign Up" />
                <Button 
                    content="Sign In" 
                    onClick={handleSignInClick}
                />
            </div>
            {isSignInOpen && <SignIn/>}
        </div>

    );
}