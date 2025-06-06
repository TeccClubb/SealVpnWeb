import React from "react";

const CheckedIcon = ({ checked = true }) =>
  checked ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_13823)">
        <g>
          <path
            d="M9.99995 18.6903C14.722 18.6903 18.55 14.8624 18.55 10.1403C18.55 5.4183 14.722 1.59033 9.99995 1.59033C5.27792 1.59033 1.44995 5.4183 1.44995 10.1403C1.44995 14.8624 5.27792 18.6903 9.99995 18.6903Z"
            fill="#4DB8AC"
            stroke="#4DB8AC"
            strokeWidth="2px"
          />
          <path fillRule="evenodd" clipRule="evenodd" d="M4.30005 11.191L7.54335 14.8181H9.5412L15.9166 6.18548L14.029 5.15283L8.4696 12.3994L6.2941 9.99308L4.30005 11.191Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath>
          <rect
            width="19"
            height="19"
            fill="white"
            transform="translate(0.5 0.640137)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_13823)">
        <g>
          <path
            d="M9.99995 18.6903C14.722 18.6903 18.55 14.8624 18.55 10.1403C18.55 5.4183 14.722 1.59033 9.99995 1.59033C5.27792 1.59033 1.44995 5.4183 1.44995 10.1403C1.44995 14.8624 5.27792 18.6903 9.99995 18.6903Z"
            fill="white"
            stroke="#4DB8AC"
            strokeWidth="2px"
          />
        </g>
      </g>
      <defs>
        <clipPath>
          <rect
            width="19"
            height="19"
            fill="white"
            transform="translate(0.5 0.640137)"
          />
        </clipPath>
      </defs>
    </svg>
  );

export default CheckedIcon;
