/**
 * @enum {string}
 */
const AnswersMap = {
  TRUE: `correct`,
  FALSE: `incorrect`
};


const getType = (timeLeft) => {
  if (30 - timeLeft < 10) {
    return `fast`;
  } else if (30 - timeLeft > 20) {
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
  newState.answers.push({
    correctness: AnswersMap[correctness.toUpperCase()],
    type: AnswersMap[correctness.toUpperCase()] === `correct` ? getType(oldState.timeLeft) : `normal`
  });
  return newState;
};

export default state;

