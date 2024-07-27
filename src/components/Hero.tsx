import React from "react";
import Image from "next/image";

type HeroProps = {
  src: string;
  alt?: string;
  height?: string;
  objectPosition?: string;
};

const Hero = (props: HeroProps) => {
  const { src, alt = "", height='40vw', objectPosition = '0 0' } = props;
  return (
    <div
    style={{
        position: "relative",
        width: "calc(100vw - 20px)",
        height: height,
        overflow: "hidden",
    }}
    >
    <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        loading="eager"
        priority
    />
    </div>
  );
};

export default Hero;
