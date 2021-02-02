import { handData } from "./game";

export const GameVisualization = ({ playerHand, opponentHand }) => {
  return (
    playerHand &&
    opponentHand && (
      <div>
        {handData.get(playerHand).label} vs {handData.get(opponentHand).label}
      </div>
    )
  );
};
