import "./App.css";
import { useGame } from "./game/useGame";
import { GameVisualization } from "./GameVisualization";
import { HandChooser } from "./HandChooser";
import { Winner } from "./Winner";

function App() {
  const [{ playerHand, opponentHand, winner }, playGame] = useGame();

  return (
    <div>
      <HandChooser handleSetHand={playGame} />
      <GameVisualization
        playerHand={playerHand}
        opponentHand={opponentHand}
        winner={<Winner winner={winner} />}
      />
    </div>
  );
}

export default App;
