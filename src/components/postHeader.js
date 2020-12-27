import React from "react";
import styles from "./postHeader.scss";

// This component is the header for any post which includes the display picture(ellipse1),username and date of a post.
const PostHeader = () => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.displayPic} />
      <div className={styles.username} />
      <div className={styles.date} />
    </div>
  );
};

export default PostHeader;