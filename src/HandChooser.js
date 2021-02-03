import { ROCK, PAPER, SCISSORS, handData } from "./game";
import styles from "./HandChooser.module.css";

export const HandChooser = ({ handleSetHand }) => {
  return (
    <div className={styles.handChooser}>
      <HandButton handleSetHand={() => handleSetHand(ROCK)}>
        {handData.get(ROCK).label}
      </HandButton>
      <HandButton handleSetHand={() => handleSetHand(PAPER)}>
        {handData.get(PAPER).label}
      </HandButton>
      <HandButton handleSetHand={() => handleSetHand(SCISSORS)}>
        {handData.get(SCISSORS).label}
      </HandButton>
    </div>
  );
};

export const HandButton = ({ handleSetHand, children }) => {
  return (
    <button className={styles.handButton} onClick={handleSetHand}>
      {children}
    </button>
  );
};
