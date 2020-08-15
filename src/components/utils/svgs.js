import React from "react"

export const ArrowDown = props => (
  <svg
    width="24"
    height="14"
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
      fill={props.color}
    />
  </svg>
)

export const ArrowRight = props => (
  <svg
    width="33"
    height="16"
    viewBox="0 0 33 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.4479 8.70711C32.8384 8.31658 32.8384 7.68342 32.4479 7.29289L26.0839 0.928932C25.6934 0.538408 25.0602 0.538408 24.6697 0.928932C24.2792 1.31946 24.2792 1.95262 24.6697 2.34315L30.3265 8L24.6697 13.6569C24.2792 14.0474 24.2792 14.6805 24.6697 15.0711C25.0602 15.4616 25.6934 15.4616 26.0839 15.0711L32.4479 8.70711ZM0.611328 9H31.7408V7H0.611328V9Z"
      fill={props.color}
    />
  </svg>
)

export const Ellips = props => (
  <svg
    width="496"
    height="558"
    viewBox="0 0 496 558"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii)">
      <path
        d="M496 355.072C496 513.776 332.559 557.645 214.571 557.645C96.5838 557.645 0.936085 428.991 0.936085 270.287C0.936085 111.584 37.3357 0 155.323 0C273.311 0 496 196.369 496 355.072Z"
        fill="#3399FF"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii"
        x="0.936035"
        y="-4"
        width="495.064"
        height="565.645"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow"
          result="effect2_innerShadow"
        />
      </filter>
    </defs>
  </svg>
)
