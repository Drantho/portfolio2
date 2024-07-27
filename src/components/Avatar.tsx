import React from "react";
import Image from "next/image";
const Avatar = () => {
  return (
    <div style={{position: 'relative'}}>
      <svg
        viewBox="0 0 500.0 500.0"
        style={{
          width: "100%",
          height: "100%",
          opacity: 1.0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <g style={{ transform: "scale(1, 1)" }}>
          <path
            d="M250,0 C111.90000153,0 0,111.90000153 0,250 L0,500 L250,500 C388.1000061,500 500,388.09999847 500,250 C500,111.90000153 388.1000061,0 250,0 Z"
            style={{ fill: "#222e3f", opacity: 1.0 }}
          ></path>
          <path
            d="M250,30.89999962 C127.83461502,30.89999962 28.80000305,129.93461159 28.80000305,252.09999657 C28.80000305,374.26538154 127.83461502,473.29999352 250,473.29999352 C372.16538498,473.29999352 471.19999695,374.26538154 471.19999695,252.09999657 C471.19999695,129.93461159 372.16538498,30.89999962 250,30.89999962 Z"
            style={{ fill: "none", stroke: "transparent" }}
          ></path>
        </g>
      </svg>

      <Image
        style={{ borderRadius: "50%", zIndex: 50,
            position: "absolute",width: 207, height: 207, top: '4%', left: '5%' }}
        alt="Profile photo of Anthony Mitchell"
        width={400}
        height={400}
        src="/me.webp"
      />
    </div>
  );
};

export default Avatar;
