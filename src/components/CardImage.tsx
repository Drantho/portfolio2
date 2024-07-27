import React, { ReactNode } from "react";
import styles from "@/styles/CardImage.module.css";

type CardImageProps = {
  children: ReactNode;
};

const CardImage = (props: CardImageProps) => {
  const { children } = props;
  return <div className={styles.cardImage}>{children}</div>;
};

export default CardImage;
