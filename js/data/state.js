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

const state = {
  lives: 3,
  timeLeft: 30,
  playerName: ``,
  answers: []
};

state.setName = (oldState, name) => {
  const newState = Object.assign({}, oldState);
  newState.playerName = name;
  return newState;
};

state.setTime = (oldState, time) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = time;
  return newState;
};

state.resetTime = (oldState) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = 30;
  return newState;
};

state.setLives = (oldState, lives) => {
  const newState = Object.assign({}, oldState);
  newState.lives = lives;
  return newState;
};

state.addAnswer = (oldState, correctness) => {
  const newState = Object.assign({}, oldState);
  newState.answers = [...newState.answers, {
    correctness: AnswersMap[correctness],
    type: AnswersMap[correctness] === `correct` ? getType(oldState.timeLeft) : `normal`
  }];
  return newState;
};

export default state;

