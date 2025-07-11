import * as React from "react";
const TimeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <circle cx={8} cy={8} r={7.5} stroke="#fff" />
    <path stroke="#fff" strokeLinecap="round" d="M8 3v6l3.5 2" />
  </svg>
);

export default TimeIcon;
