import { handData, PLAYER_ONE, PLAYER_TWO } from "./game";
import styles from "./GameVisualization.module.css";
import { Winner } from "./Winner";

export const GameVisualization = ({ playerHand, opponentHand, winner }) => {
  return (
    playerHand &&
    opponentHand && (
      <>
        <div className={styles.gameVisualization}>
          <Hand isWinner={winner === PLAYER_ONE}>
            {handData.get(playerHand).label}
          </Hand>
          <span>vs.</span>
          <Hand isWinner={winner === PLAYER_TWO}>
            {handData.get(opponentHand).label}
          </Hand>
        </div>
        <Winner winner={winner} />
      </>
    )
  );
};

export const Hand = ({ children, isWinner }) => {
  return (
    <div className={isWinner ? styles.playedHand : styles.winner}>
      {children}
    </div>
  );
};
