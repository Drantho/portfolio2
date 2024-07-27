import React from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
      <div className={`${styles.nav} full-width`}>
        <div className={`${styles.links} container`}>
          <div className={styles.brand}></div>
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/#resume">Resume</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <div style={{width: 100}}>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
