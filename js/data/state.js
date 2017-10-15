/**
 * @enum {string}
 */
const AnswersMap = {
  TRUE: `correct`,
  FALSE: `incorrect`
};

export class InitialState {
  constructor() {
    this.lives = 3;
    this.currentScreen = ``;
    this.timeLeft = 90;
    this.playerName = ``;
    this.answers = [];
  }

  /**
   * Сохраняет имя пользователя
   * @param {string} name
   */
  setName(name) {
    this.playerName = name;
  }

  /**
   * Добавляет ответ
   * @param {string} correctness
   * @param {string} type
   */
  addAnswer(correctness, type) {
    this.answers.push({
      correctness: AnswersMap[correctness.toUpperCase()],
      type
    });
  }

  decreaseLives() {
    this.lives--;
  }
}

export const state = new InitialState();
