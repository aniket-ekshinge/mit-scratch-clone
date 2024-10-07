import * as React from "react";

const FishSprite = ({ styles, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0.3210171699523926 0.3000000357627869 95.17898101806641 100.04156036376953"
    width={100}
    height={50}
    style={styles}
    onClick={onClick}
  >
    {/* Body of the Fish */}
    <ellipse cx="50" cy="25" rx="30" ry="15" fill="#77b5fe" stroke="#005599" strokeWidth="2" />

    {/* Tail */}
    <polygon points="20,25 5,10 5,40" fill="#77b5fe" stroke="#005599" strokeWidth="2" />

    {/* Eye */}
    <circle cx="65" cy="20" r="3" fill="#ffffff" />
    <circle cx="65" cy="20" r="1" fill="#000000" />

    {/* Fins */}
    <polygon points="40,10 30,20 40,20" fill="#77b5fe" stroke="#005599" strokeWidth="1.5" />
    <polygon points="40,40 30,30 40,30" fill="#77b5fe" stroke="#005599" strokeWidth="1.5" />
  </svg>
);

export default FishSprite;
