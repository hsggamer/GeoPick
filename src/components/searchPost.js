import React from "react";
import styles from "./searchPost.scss";
// This component is the result of the search interface :- The summary pictures of the username searched
const SearchPost = ({
  num20October = <>20 october</>,
  doeJohn = "doe.john"
}) => {
  return (
    <div className={styles.searchPost}>
      <div className={styles.ellipse1} />
      <div className={styles.flexWrapperOne}>
        <p className={styles.num20October}>
          {num20October}
        </p>
      </div>
      <div className={styles.flexWrapperTwo}>
        <p className={styles.doeJohn}>{doeJohn}</p>
      </div>
      <div className={styles.flexWrapperThree}>
        <div className={styles.post1} />
        <div className={styles.flexWrapperFour}>
          <div className={styles.post2} />
          <div className={styles.flexWrapperFive}>
            <div className={styles.post3} />
            <div className={styles.flexWrapperFour}>
              <div className={styles.miniPost} />
              <div className={styles.miniPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPost;