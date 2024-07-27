import React from "react";
import styles from "@/styles/SimpleCard.module.css";
import CardImage from "./CardImage";
import { PortfolioItem } from "@/data/data2";
import Link from "next/link";

const SimpleCard = (props: PortfolioItem) => {
  const { displayName, name, displayType, technologies, images, description } = props;

  const truncateDescription = (text: string, charLimit: number) => {
    if (text.length <= charLimit) return text;
    const truncatedText = text.slice(0, charLimit);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    return lastSpaceIndex === -1 ? truncatedText : truncatedText.slice(0, lastSpaceIndex) + '...';
  };

  return (
    <div className={styles.simpleCard}>
        <Link href={`/project/${name}`}>
            <CardImage>
                <img src={images[0]} alt={displayName} />
            </CardImage>
        </Link>
        <div className={styles.info}>
            <Link href={`/project/${name}`}>
            <h3>{displayName}</h3>
            </Link>
            <h4>{displayType} | {technologies.slice(0,2).join(', ')}</h4>
            <p>{truncateDescription(description, 130)}</p>
            <Link className={styles.viewDetails} href={`/project/${name}`}>View Details</Link>
        </div>
    </div>
  );
};

export default SimpleCard;
