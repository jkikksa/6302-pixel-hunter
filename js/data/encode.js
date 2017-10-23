
/**
 * @enum {number}
 */
const EncodeMap = {
  CORRECT: 1,
  INCORRECT: 0,
  FAST: 2,
  NORMAL: 3,
  SLOW: 4,
};

/**
 * @enum {string}
 */
const DecodeMap = {
  1: `CORRECT`,
  0: `INCORRECT`,
  2: `FAST`,
  3: `NORMAL`,
  4: `SLOW`,
};

/**
 * Кодирует объект state в строку
 * @param {Object} state
 * @return {string}
 */
export const encode = (state) => {
  let encodedState = state.answers.reduce((acc, it) => {
    acc += `${EncodeMap[it.correctness.toUpperCase()]}${EncodeMap[it.type.toUpperCase()]}&`;
    return acc;
  }, ``);

  encodedState += state.lives;
  return encodedState;
};

/**
 * Декодирует закодированную строку в объект state
 * @param {string} codeString
 * @return {Object.<Array, string>}
 */
export const decode = (codeString) => {
  const codeArray = codeString.split(`&`);
  const lives = codeArray.pop();
  const answers = codeArray.reduce((acc, it) => {
    acc.push({
      correctness: DecodeMap[it.charAt(0)].toLowerCase(),
      type: DecodeMap[it.charAt(1)].toLowerCase()
    });
    return acc;
  }, []);

  return {
    answers,
    lives
  };
};
