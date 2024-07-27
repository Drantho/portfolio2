import React, { ReactNode } from "react";
import styles from "@/styles/IconButton.module.css";
import Link from "next/link";

type IconButtonProps = {
  children: ReactNode;
  href: string;
};

const IconButton = (props: IconButtonProps) => {
  const { children, href } = props;
  return (
    <Link
      href={href}
      className={styles.iconButton}
    >
      {children}
    </Link>
  );
};

export default IconButton;
