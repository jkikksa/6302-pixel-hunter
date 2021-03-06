import {Settings, AnswerType, Correctness} from './settings';

/**
 * @enum {string}
 */
const AnswersMap = {
  true: `correct`,
  false: `incorrect`
};

/**
 * Возвращает тип ответа в зависимости от скорости ответа
 * @param {number} timeLeft
 * @return {string}
 */
const getType = (timeLeft) => {
  if (timeLeft > Settings.FAST_TIME) {
    return AnswerType.FAST;
  } else if (timeLeft < Settings.SLOW_TIME) {
    return AnswerType.SLOW;
  }
  return AnswerType.NORMAL;
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
  lives: Settings.LIVES,
  timeLeft: Settings.LEVEL_TIME,
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
 * @param {number} time
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
  newState.timeLeft = Settings.LEVEL_TIME;
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
    type: AnswersMap[correctness] === Correctness.CORRECT ? getType(oldState.timeLeft) : AnswerType.NORMAL
  }];
  return newState;
};

