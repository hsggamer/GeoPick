import React from "react";
import styles from "./commentBox.scss";

const Impressions = () => {
  return (
    <div className={styles.impressions}>
      <div className={styles.upvotes} />
      <div className={styles.commentBox} />
    </div>
  );
};

export default Impressions;