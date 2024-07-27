import React, {ReactNode, CSSProperties} from "react";
import styles from "@/styles/Row.module.css";

type RowProps = {
  children: ReactNode;
  across: 2 | 3 | 4;
  style?: CSSProperties;
};

const Row = (props: RowProps) => {
  const { children, across, style } = props;
  return (
    <div className={`${styles.row} ${across === 2 ? styles.across2 : across === 3 ? styles.across3 : styles.across4}`} style={{ ...style }}>
        {children}
    </div>
  );
};

export default Row;
