import React, { ReactNode } from "react";
import styles from "@/styles/ImageStack.module.css";

type ImageStackProps = {
  children: ReactNode;
};

const ImageStack = (props: ImageStackProps) => {
  const { children } = props;
  return <div className={styles.imageStack}>{children}</div>;
};

export default ImageStack;
