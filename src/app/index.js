export const PLAYER_ONE = "player 1";
export const PLAYER_TWO = "player 2";
export const DRAW = "draw";

export const ROCK = 0;
export const PAPER = 1;
export const SCISSORS = 2;

export const hands = [ROCK, PAPER, SCISSORS];

export const determineWinner = (x, y) => {
  if (x === y) return DRAW;
  return (x + 1) % 3 === y ? PLAYER_TWO : PLAYER_ONE;
};

export const randomizeHand = () => {
  return hands[Math.floor(Math.random() * hands.length)];
};
