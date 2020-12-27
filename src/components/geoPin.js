import React from "react";
import styles from "./geoPin.scss";

const GeoPin = () => {
  return (
    <div className={styles.geoPin}>
      <img
        alt=""
        className={styles.vector}
        src="https://static.overlay-tech.com/assets/f355c7e8-2bd0-4618-a52a-ca896f6c10a2.svg"
      />
      <img
        alt=""
        className={styles.pinHole}
        src="https://static.overlay-tech.com/assets/1cf0320c-8531-4a0b-8a49-832ed1f79e7a.svg"
      />
    </div>
  );
};

export default GeoPin;