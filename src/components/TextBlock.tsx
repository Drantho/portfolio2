import React, { ReactNode, CSSProperties } from "react";
import styles from "@/styles/TextBlock.module.css";

type TextBlock = {
  children: ReactNode;
  style?: CSSProperties;
};

const TextBlock = (props: TextBlock) => {
  const { children, style } = props;
  return (
    <article className={styles.textBlock} style={style}>
      <p>{children}</p>
    </article>
  );
};

export default TextBlock;
