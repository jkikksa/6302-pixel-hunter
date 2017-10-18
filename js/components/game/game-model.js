/**
 * Возвращает случайное целое число.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

import questions from './data/questions';
import answers from './data/answers';

class GameModel {
  constructor() {
    this.questions = questions;
    this.answers = answers;
  }

  get timeLeft() {
    return this.state.timeLeft;
  }

  updateState(newState) {
    this.state = newState;
  }

  addAnswer(correctness) {
    const newState = this.state.addAnswer(this.state, `${correctness}`);
    this.updateState(newState);
  }

  decreaseLives() {
    const newState = this.state.setLives(this.state, --this.state.lives);
    this.updateState(newState);
  }

  /**
 * Возвращает случайный объект вопроса.
 * @return {Object}
 */
  getQuestion() {
    return this.questions[getRandomInt(0, this.questions.length)];
  }

  /**
   * Возвращает объект ответа с нужным id
   * @param {number} id
   * @return {Object}
   */
  getAnswer(id) {
    return this.answers.find((it) => it.id === id);
  }

}

export default GameModel;
