import React, { ReactNode, CSSProperties, useRef } from "react";
import styles from "@/styles/CardHorizontal.module.css";
import { PortfolioItem } from "@/data/data";
import CardImage from "./CardImage";
import Link from "next/link";

type CardHorizontalProps = {
  data: PortfolioItem[];
  children?: ReactNode;
  style?: CSSProperties;
  key?: string;
};

const CardHorizontal = (props: CardHorizontalProps) => {
  const { data, children, style } = props;

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].classList.add(styles.active);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].classList.remove(styles.active);
    }
  };

  return (
    <div className={styles.cardHorizontal} style={style}>
      <CardImage>
        {data.slice(0, 5).map((project, index) => (
            <img
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              src={project.largeImage}
              key={project.name}
            />
          ))}
      </CardImage>
      <div>
        <h3>
          <Link href={`ProjectType/${data[0].type}`}>{data[0].displayType}</Link>
        </h3>
        <ul>
          {data.slice(0, 5).map((project, index) => (
            <li
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={project.name}
            >
              <Link href={`project/${project.name}`}>
                {project.displayName}
              </Link>
            </li>
          ))}
          {data.length > 5 && <li>
            <Link href={`ProjectType/${data[0].type}`}>
              See More...
            </Link>
          </li>}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default CardHorizontal;