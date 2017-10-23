/**
 * @enum {string}
 */
const AnswersMap = {
  true: `correct`,
  false: `incorrect`
};

const TIME_LEFT = 30;
const FAST_TIME = 20;
const SLOW_TIME = 10;

/**
 * Возвращает тип ответа в зависимости от скорости ответа
 * @param {number} timeLeft
 * @return {string}
 */
const getType = (timeLeft) => {
  if (timeLeft > FAST_TIME) {
    return `fast`;
  } else if (timeLeft < SLOW_TIME) {
    return `slow`;
  }
  return `normal`;
};

/**
 * @typedef {Object} State
 * @property {number} lives
 * @property {number} timeleft
 * @property {string} playerName
 * @property {Array} answers
 *
 */
export const State = {
  lives: 3,
  timeLeft: 30,
  playerName: ``,
  answers: []
};

/**
 * Устанавливает имя пользователя
 * @param {State} oldState
 * @param {string} name
 * @return {State}
 */
export const setName = (oldState, name) => {
  const newState = Object.assign({}, oldState);
  newState.playerName = name;
  return newState;
};

/**
 * Устанавливает оставшееся время
 * @param {State} oldState
 * @param {string} time
 * @return {State}
 */
export const setTime = (oldState, time) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = time;
  return newState;
};

/**
 * Cбрасывает время на начальное
 * @param {State} oldState
 * @return {State}
 */
export const resetTime = (oldState) => {
  const newState = Object.assign({}, oldState);
  newState.timeLeft = TIME_LEFT;
  return newState;
};

/**
 * Устанавливает количество жизней
 * @param {State} oldState
 * @param {number} lives
 * @return {State}
 */
export const setLives = (oldState, lives) => {
  const newState = Object.assign({}, oldState);
  newState.lives = lives;
  return newState;
};


/**
 * Добавляет ответ
 * @param {State} oldState
 * @param {string} correctness Правильность ответа
 * @return {State}
 */
export const addAnswer = (oldState, correctness) => {
  const newState = Object.assign({}, oldState);
  newState.answers = [...newState.answers, {
    correctness: AnswersMap[correctness],
    type: AnswersMap[correctness] === `correct` ? getType(oldState.timeLeft) : `normal`
  }];
  return newState;
};

