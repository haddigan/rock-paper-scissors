import { useState } from "react";
import "./App.css";
import { randomizeHand, determineWinner } from "./game";
import { GameVisualization } from "./GameVisualization";
import { HandChooser } from "./HandChooser";
import { Winner } from "./Winner";

function App() {
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

  return (
    <div>
      <HandChooser handleSetHand={chooseHand} />
      <GameVisualization
        playerHand={game.playerHand}
        opponentHand={game.opponentHand}
      />
      <Winner winner={game.winner} />
    </div>
  );
}

export default App;
