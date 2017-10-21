import answersList from './answers';

/**
 * Возвращает объект ответа с нужным id
 * @param {number} id
 * @return {Object}
 */
const getAnswer = (id) => {
  return answersList.find((it) => it.id === id);
};

export default getAnswer;
