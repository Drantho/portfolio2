import React, { ReactNode, CSSProperties } from "react";
import styles from "@/styles/Button.module.css";


type ButtonProps = {
  children: ReactNode;
  href: string;
  style?: CSSProperties;
};

const Button = (props: ButtonProps) => {
    const { children, href, style } = props;
  return (
    <a href={href} style={style} className={styles.button}>{children}</a>
  )
}

export default Button