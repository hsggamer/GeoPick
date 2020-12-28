import React from "react";
import styles from "./uploadMessageButton.scss";

const UploadMessageButton = ({
  cancel = "Cancel",
  yes = "Yes!"
}) => {
  return (
    <div className={styles.uploadMessageButton}>
      <div className={styles.flexWrapperTwo}>
        <p className={styles.cancel}>{cancel}</p>
      </div>
      <div className={styles.flexWrapperOne}>
        <p className={styles.yes}>{yes}</p>
      </div>
    </div>
  );
};

export default UploadMessageButton;