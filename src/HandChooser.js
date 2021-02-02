import { ROCK, PAPER, SCISSORS, handData } from "./game";
export const HandChooser = ({ handleSetHand }) => {
  return (
    <div style={{ fontSize: "3em", display: "flex" }}>
      <button onClick={() => handleSetHand(PAPER)}>
        {handData.get(PAPER).label}
      </button>
      <button onClick={() => handleSetHand(ROCK)}>
        {handData.get(ROCK).label}
      </button>
      <button onClick={() => handleSetHand(SCISSORS)}>
        {handData.get(SCISSORS).label}
      </button>
    </div>
  );
};
