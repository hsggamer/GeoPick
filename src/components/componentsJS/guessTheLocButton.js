import React from "react";
import styles from "./guessTheLocButton.scss";

const GuessTheLocation = ({
  guessTheLocationText = (
    <>
      Guess the{" "}
      <strong className={styles.guessTheLocationEmphasis2}>
        location
      </strong>
    </>
  )
}) => {
  return (
    <div className={styles.guessTheLocation}>
      <div className={styles.thePin}>
        <img
          alt=""
          className={styles.pinOutline}
          src="https://static.overlay-tech.com/assets/bc3ee24c-a892-4c4d-a718-3e1bdafe2807.svg"
        />
        <img
          alt=""
          className={styles.pinContained}
          src="https://static.overlay-tech.com/assets/dea7ab92-a026-4cfc-ba58-2d227083b7f7.svg"
        />
        <img
          alt=""
          className={styles.vector}
          src="https://static.overlay-tech.com/assets/824138b5-0a51-431d-b43c-958cb0f09577.svg"
        />
      </div>
      <p className={styles.guessTheLocationText}>
        {guessTheLocationText}
      </p>
    </div>
  );
};

export default GuessTheLocation;
