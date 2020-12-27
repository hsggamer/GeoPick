import React from "react";
import styles from "./cameraUpload.scss";

const cameraIcon = () => {
  return (
    <div className={styles.cameraIcon}>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/cfc86984-d784-4e57-87d4-57e19236c699.svg"
      />
    </div>
  );
};

export default cameraIcon;