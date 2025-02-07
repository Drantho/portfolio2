import React, { CSSProperties } from "react";

type IconProps = {
  style?: CSSProperties;
};

const LinkedinIcon = (props: IconProps) => {
  const { style } = props;
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="484"
      preserveAspectRatio="xMidYMid meet"
      version="1"
      viewBox="10.5 8.7 484.0 484.0"
      width="484"
      zoomAndPan="magnify"
    >
      <title>View Anthony Mitchell's LinkedIn profile</title>
      <g id="change1_1">
        <path
          d="M494.501,419.108c0,40.617-32.928,73.545-73.548,73.545H84.062c-40.619,0-73.543-32.928-73.543-73.545 V82.215c0-40.619,32.925-73.545,73.543-73.545h336.892c40.62,0,73.548,32.926,73.548,73.545V419.108z"
          fill="#222e3f"
        />
      </g>
      <g fill="#ffffff" id="change2_1">
        <circle cx="165.74" cy="181.342" fill="inherit" r="36.155" />
        <path d="M134.572 244.152H196.685V443.969H134.572z" fill="inherit" />
        <path d="M235.75 244.152H294.87V443.969H235.75z" fill="inherit" />
        <path
          d="M238.306 350.54H297.423V443.96900000000005H238.306z"
          fill="inherit"
        />
        <path
          d="M297.423,350.54c0,0-0.924-25.917,5.911-39.392c0,0,6.836-16.595,28.321-16.695 c0,0,25.197-4.399,32.423,20.603c0,0,2.735,13.866,2.735,19.728s0.196,109.186,0.196,109.186h61.916V329.511 c0,0,4.494-64.654-34.312-82.365c0,0-63.807-28.646-98.439,23.962c0,0-7.554,5.206-8.597-9.378 c-1.043-14.584-9.896,22.398-10.157,23.181c-0.261,0.781,10.157,73.702,10.157,73.702L297.423,350.54z"
          fill="inherit"
        />
      </g>
    </svg>
  );
};

export default LinkedinIcon;
