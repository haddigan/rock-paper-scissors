export const PLAYER_ONE = "player 1";
export const PLAYER_TWO = "player 2";
export const DRAW = "draw";

export const ROCK = "rock";
export const PAPER = "paper";
export const SCISSORS = "scissors";

export const handData = new Map([
  [
    ROCK,
    {
      label: "🪨",
      value: 0,
    },
  ],
  [
    PAPER,
    {
      label: "📄",
      value: 1,
    },
  ],
  [
    SCISSORS,
    {
      label: "✂️",
      value: 2,
    },
  ],
]);

export const hands = Array.from(handData.keys());

export const determineWinner = (x, y) => {
  if (x === y) return DRAW;
  const playerValue = handData.get(x).value;
  const opponentValue = handData.get(y).value;
  if ((playerValue + 1) % 3 === opponentValue) return PLAYER_TWO;
  return PLAYER_ONE;
};

export const randomizeHand = () => {
  return hands[Math.floor(Math.random() * hands.length)];
};
