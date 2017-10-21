import questions from './questions';

/**
 * Возвращает случайное целое число.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


/**
* Возвращает случайный объект вопроса.
* @return {Object}
*/
const getQuestion = () => {
  return questions[getRandomInt(0, questions.length)];
};

export default getQuestion;
