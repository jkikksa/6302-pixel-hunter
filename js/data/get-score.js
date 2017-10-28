import settings from './settings';

/**
 * Кол-во очков за типы ответов
 * @enum {number}
 */
const Scores = {
  CORRECT: 100,
  INCORRECT: 0,
  FAST: 50,
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
 * @param {number} remainingLives Количество оставшихся жизней
 * @return {Object}
 */
const getScore = (answers, remainingLives) => {
  let score = {};
  if (answers.length < settings.LEVELS_COUNT) {
    score.totalScore = -1;
    return score;
  }

  score = answers.reduce((acc, it) => {
    acc.answersScore += Scores[it.correctness.toUpperCase()];
    acc.bonusCount += it.type === `fast` ? 1 : 0;
    acc.penaltyCount += it.type === `slow` ? 1 : 0;
    return acc;
  }, {
    answersScore: 0,
    bonusCount: 0,
    penaltyCount: 0
  });

  score.bonusScore = score.bonusCount * Scores.FAST;
  score.penaltyScore = score.penaltyCount * Scores.SLOW;
  score.livesCount = remainingLives;
  score.livesScore = score.livesCount * REMAINING_LIFE_SCORE;
  score.totalScore = score.answersScore + score.bonusScore + score.penaltyScore + score.livesScore;
  return score;
};

export default getScore;
