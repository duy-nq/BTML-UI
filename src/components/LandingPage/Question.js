import React, {useState} from "react";

export default function QnA(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <div 
            style={{alignSelf: 'stretch', height: isHovered ? 'auto' : '30px', transition: 'height 0.5s ease-in-out', paddingLeft: 39, paddingRight: 39, paddingTop: 10, paddingBottom: 10, background: 'rgba(255, 255, 255, 0)', borderRadius: 15, overflow: 'hidden', borderLeft: '1px #5867EC solid', borderTop: '12px #5867EC solid', borderRight: '1px #5867EC solid', borderBottom: '1px #5867EC solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', flexDirection:'column'}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{flex: '1 1 0', color: '#5867EC', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{props.question}</div>
            <div style={{flex: '1 1 0', color: '#5867EC', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>A: {props.answer}</div>
        </div>
    );
}