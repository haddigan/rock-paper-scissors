import { PLAYER_ONE, PLAYER_TWO, DRAW } from "./game";
import styles from "./Winner.module.css";

export const Winner = ({ winner }) => {
  return Boolean(winner) ? (
    <div className={styles.winner}>
      {winner === DRAW && <div>It's a draw</div>}
      {winner === PLAYER_ONE && <div>You win!</div>}
      {winner === PLAYER_TWO && <div>You lose!</div>}
    </div>
  ) : null;
};
