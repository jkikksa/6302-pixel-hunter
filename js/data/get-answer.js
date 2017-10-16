const ANSWERS = [
  {
    id: 0,
    data: {
      question1: `paint`,
      question2: `photo`
    }
  },
  {
    id: 1,
    data: {
      question1: `paint`
    }
  },
  {
    id: 2,
    data: {
      question1: `photo`,
      question2: `photo`,
      question3: `paint`
    }
  }
];

/**
 * Возвращает объект ответа с нужным id
 * @param {number} id
 * @return {Object}
 */
export default (id) => {
  return ANSWERS.find((it) => it.id === id);
};