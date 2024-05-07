import React from "react";

export default function HeaderRow() {
    return (
        <>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 76, display: 'inline-flex', borderTop: '2px solid black'}}>
                <div style={{width: 49, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>#</div>
                <div style={{width: 216, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Name</div>
                <div style={{width: 175, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Company</div>
                <div style={{width: 104, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Num.</div>
                <div style={{width: 138, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Price</div>
                <div style={{width: 149, height: 43, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Total</div>
            </div>
        </>
    );
}