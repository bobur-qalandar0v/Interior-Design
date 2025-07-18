import * as React from "react";
const SmallIcon = (props) => (
  <svg
    width={8}
    height={12}
    style={{
      verticalAlign: "text-bottom",
    }}
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path opacity={1} d="M1 0.355469L6.64453 6L1 11.6445" stroke="#3F3E3E" />
  </svg>
);
export default SmallIcon;
