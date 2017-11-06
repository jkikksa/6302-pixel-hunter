/**
 * Параметры игры.
 * @enum {number}
 */
export const Settings = {
  LEVELS_COUNT: 10,
  LIVES: 3,
  LEVEL_TIME: 30,
  FAST_TIME: 20,
  SLOW_TIME: 10,
  WARNING_TIME: 5,
};

/**
 * @enum {string}
 */
export const AnswerType = {
  FAST: `fast`,
  SLOW: `slow`,
  NORMAL: `normal`
};

/**
 * @enum {string}
 */
export const Correctness = {
  CORRECT: `correct`,
  INCORRECT: `incorrect`,
};
