import React from "react";
import Header from "../Basic/Header";
import { Footer } from "../Basic/Footer";
import { SPContent, FAQs } from "./Content";

export default function Start() {
    return (
        <div style={{width: '100%', height: '100%', background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 'auto', display: 'inline-flex'}}>
            <Header></Header>
            <SPContent></SPContent>
            <FAQs/>
            <Footer></Footer>
        </div>     
    );
}

