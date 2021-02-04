import "./App.css";
import { useGame } from "./game/useGame";
import { GameVisualization } from "./GameVisualization";
import { HandChooser } from "./HandChooser";

function App() {
  const [{ playerHand, opponentHand, winner }, playGame] = useGame();

  return (
    <div>
      <HandChooser handleSetHand={playGame} />
      <GameVisualization
        playerHand={playerHand}
        opponentHand={opponentHand}
        winner={winner}
      />
    </div>
  );
}

export default App;
