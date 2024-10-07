import * as React from "react";

const FmanSprite = ({ styles, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0.3210171699523926 0.3000000357627869 95.17898101806641 100.04156036376953"
        style={styles}
        onClick={onClick}
    >
        {/* Fisherman's Head */}
        <circle cx="50" cy="20" r="10" fill="#FFD700" stroke="black" strokeWidth="2" /> {/* Head */}
        
        {/* Fisherman's Body */}
        <rect x="45" y="30" width="10" height="25" fill="#3B5998" stroke="black" strokeWidth="1.5" /> {/* Body */}
        
        {/* Fisherman's Legs */}
        <g fill="#6A5ACD" stroke="black" strokeWidth="1.5">
            <polygon points="47,55 44,75 50,75" /> {/* Left Leg */}
            <polygon points="53,55 56,75 50,75" /> {/* Right Leg */}
        </g>

        {/* Fisherman's Arms */}
        <g fill="#8B4513" stroke="black" strokeWidth="1.5">
            <polygon points="45,35 30,45 38,47" /> {/* Left Arm */}
            <polygon points="55,35 70,45 62,47" /> {/* Right Arm */}
        </g>

        {/* Fishing Rod */}
        <line x1="38" y1="47" x2="25" y2="10" stroke="#000" strokeWidth="2" /> {/* Fishing Rod */}
        <line x1="25" y1="10" x2="60" y2="40" stroke="#000" strokeWidth="1.5" /> {/* Fishing Line */}

        {/* Bobber */}
        <circle cx="60" cy="40" r="2" fill="#FF0000" stroke="black" strokeWidth="1" /> {/* Bobber */}
    </svg>
);

export default FmanSprite;
