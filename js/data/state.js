/**
 * @enum {string}
 */
const AnswersMap = {
  true: `correct`,
  false: `incorrect`
};

const FAST_TIME = 20;
const SLOW_TIME = 10;

const getType = (timeLeft) => {
  if (timeLeft > FAST_TIME) {
    return `fast`;
  } else if (timeLeft < SLOW_TIME) {
    return `slow`;
  }
  return `normal`;
};

export const state = {
  lives: 3,
  timeLeft: 30,
  playerName: ``,
  answers: []
};

export const setName = (oldState, name) => {
  const newState = Object.assign({}, oldState);
  newState.playerName = name;
  return newState;
};

export const setTime = (oldState, time) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = time;
  return newState;
};

export const resetTime = (oldState) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = 30;
  return newState;
};

export const setLives = (oldState, lives) => {
  const newState = Object.assign({}, oldState);
  newState.lives = lives;
  return newState;
};

export const addAnswer = (oldState, correctness) => {
  const newState = Object.assign({}, oldState);
  newState.answers = [...newState.answers, {
    correctness: AnswersMap[correctness],
    type: AnswersMap[correctness] === `correct` ? getType(oldState.timeLeft) : `normal`
  }];
  return newState;
};

