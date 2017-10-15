/**
 * Кол-во очков за типы ответов
 * @enum {number}
 */
const Scores = {
  CORRECT: 100,
  INCORRECT: 0,
  QUICK: 50,
  NORMAL: 0,
  SLOW: -50,
};

/**
 * Кол-во очков начисляемых за оставшуюся жизнь
 * @type {number}
 */
const REMAINING_LIFE_SCORE = 50;

/**
 * Функция подсчёта очков при окончании игры
 * @param {Array<Object>} answers Массив ответов пользователя
 * @param {number} remainingLifes Количество оставшихся жизней
 * @return {number} Количество набранных очков
 */
const getScore = (answers, remainingLifes) => {
  if (answers.length < 10) {
    return -1;
  }
  const answersScore = answers.reduce((acc, it) => {
    acc += Scores[it.correctness.toUpperCase()] + Scores[it.type.toUpperCase()];
    return acc;
  }, 0);

  return answersScore + remainingLifes * REMAINING_LIFE_SCORE;
};

export default getScore;
