import * as React from "react";
const BurgerMenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M4 18L20 18"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M4 12L20 12"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M4 6L20 6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default BurgerMenuIcon;
