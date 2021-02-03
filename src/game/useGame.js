import { useState } from "react";
import { randomizeHand, determineWinner } from "./index";

export const useGame = () => {
  const [game, setGame] = useState({
    playerHand: null,
    opponentHand: null,
    winner: null,
  });

  const chooseHand = (playerHand) => {
    const opponentHand = randomizeHand();
    const winner = determineWinner(playerHand, opponentHand);
    setGame({
      playerHand,
      opponentHand,
      winner,
    });
  };
  return [game, chooseHand];
};
