import React from "react";
import styles from "./navbar.scss";

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        alt=""
        className={styles.home}
        src="https://static.overlay-tech.com/assets/3385ae0f-5b94-477d-bc15-1e6b720c6a04.svg"
      />
      <img
        alt=""
        className={styles.search}
        src="https://static.overlay-tech.com/assets/3ae59cbd-7b9e-45d3-8c8b-8d1634fea41f.svg"
      />
      <div className={styles.add}>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/201f86a4-c2f1-48f7-9f96-f70488c6d69a.svg"
        />
      </div>
      <img
        alt=""
        className={styles.explore}
        src="https://static.overlay-tech.com/assets/c43ff8b9-8394-4db8-a4fd-583a2c465b3b.svg"
      />
      <img
        alt=""
        className={styles.home}
        src="https://static.overlay-tech.com/assets/2c09e0e0-0361-42a4-8d12-aab577430305.svg"
      />
    </div>
  );
};

export default navbar;