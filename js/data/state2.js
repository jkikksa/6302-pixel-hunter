/**
 * @enum {string}
 */
const AnswersMap = {
  TRUE: `correct`,
  FALSE: `incorrect`
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

state.setLives = (oldState, lives) => {
  const newState = Object.assign({}, oldState);
  newState.lives = lives;
  return newState;
};

state.addAnswer = (oldState, correctness, type) => {
  const newState = Object.assign({}, oldState);
  newState.answers.push({
    correctness: AnswersMap[correctness.toUpperCase()],
    type
  });
  return newState;
};

export default state;

