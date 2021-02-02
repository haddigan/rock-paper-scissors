import {
  determineWinner,
  randomizeHand,
  DRAW,
  ROCK,
  PAPER,
  SCISSORS,
  PLAYER_ONE,
  PLAYER_TWO,
} from "./index";

test.each([
  // rock vs scissors
  [ROCK, SCISSORS, PLAYER_ONE],
  [SCISSORS, ROCK, PLAYER_TWO],
  // paper vs rock
  [PAPER, ROCK, PLAYER_ONE],
  [ROCK, PAPER, PLAYER_TWO],
  // scissors vs paper
  [SCISSORS, PAPER, PLAYER_ONE],
  [PAPER, SCISSORS, PLAYER_TWO],
  // draws
  [PAPER, PAPER, DRAW],
  [ROCK, ROCK, DRAW],
  [SCISSORS, SCISSORS, DRAW],
])("%p against %p returns %p", (a, b, expected) => {
  expect(determineWinner(a, b)).toEqual(expected);
});

test("randomize hand should return a valid hand", () => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.1);
  const rock = randomizeHand();
  expect(rock).toEqual(ROCK);

  jest.spyOn(global.Math, "random").mockReturnValue(0.4);
  const paper = randomizeHand();
  expect(paper).toEqual(PAPER);

  jest.spyOn(global.Math, "random").mockReturnValue(0.7);
  const scissors = randomizeHand();
  expect(scissors).toEqual(SCISSORS);

  jest.spyOn(global.Math, "random").mockRestore();
});
