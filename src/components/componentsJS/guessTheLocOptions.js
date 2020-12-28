import React from "react";
import styles from "./guessTheLocOptions.scss";

const GuessTheLocationInterface = ({
  guessTheLocation = (
    <>
      Guess the{" "}
      <strong className={styles.guessTheLocationEmphasis2}>
        location
      </strong>
    </>
  )
}) => {
  return (
    <div className={styles.guessTheLocationInterface}>
      <div className={styles.relativeWrapperOne}>
        <div className={styles.thePin}>
          <img
            alt=""
            className={styles.pin3}
            src="https://static.overlay-tech.com/assets/5c946634-311f-4a1e-94b3-fa3e11728406.svg"
          />
          <img
            alt=""
            className={styles.pin2}
            src="https://static.overlay-tech.com/assets/fae2a009-115e-4138-a2b3-d64f531a5a60.svg"
          />
          <img
            alt=""
            className={styles.pin1}
            src="https://static.overlay-tech.com/assets/d48e6f5c-c3f5-47ca-804e-a0568074804b.svg"
          />
        </div>
        <p className={styles.guessTheLocation}>
          {guessTheLocation}
        </p>
      </div>
      <div className={styles.option1} />
      <div className={styles.option1} />
      <div className={styles.option1} />
    </div>
  );
};

export default GuessTheLocationInterface;