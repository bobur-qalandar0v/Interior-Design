import * as React from "react";
const VideoTitleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    fill="none"
    style={{
      verticalAlign: "middle",
    }}
    {...props}
  >
    <circle cx={3} cy={3} r={3} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={0.013}
        x2={6.082}
        y1={2.313}
        y2={2.329}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#001960" />
        <stop offset={0.142} stopColor="#001960" />
        <stop offset={0.63} stopColor="#001960" />
      </linearGradient>
    </defs>
  </svg>
);
export default VideoTitleIcon;
