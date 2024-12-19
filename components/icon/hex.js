import React from "react";

const IconHex = () => (
  <svg
    width="223"
    height="223"
    viewBox="0 0 223 223"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3_3)">
      <circle cx="111.5" cy="107.5" r="107.5" fill="black" />
      <circle cx="111.5" cy="107.5" r="105" stroke="#AADDFF" strokeWidth="5" />
    </g>
    <defs>
      <filter
        id="filter0_d_3_3"
        x="0"
        y="0"
        width="223"
        height="223"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3_3"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3_3"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default IconHex;
