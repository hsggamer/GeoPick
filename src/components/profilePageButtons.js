import React from "react";
import styles from "./ProfilePageButtons.module.scss";

const ProfilePageButtons = () => {
  return (
    <div className={styles.profilePageButtons}>
      <img
        alt=""
        className={styles.signOutButton}
        src="https://static.overlay-tech.com/assets/609c663e-68d8-4660-93a2-a94f45f18376.png"
      />
      <img
        alt=""
        className={styles.signOutButton}
        src="https://static.overlay-tech.com/assets/32932bfe-742a-46c3-8543-38224bd3ad7d.png"
      />
    </div>
  );
};

export default ProfilePageButtons;