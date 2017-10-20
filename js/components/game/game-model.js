import Timer from '../../data/timer';

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
import answersList from './data/answers';

class GameModel {
  constructor() {
    this.questions = questions;
    this.answersList = answersList;
  }

  get timeLeft() {
    return this.state.timeLeft;
  }

  get answers() {
    return this.state.answers;
  }

  get lives() {
    return this.state.lives;
  }

  updateState(newState) {
    this.state = newState;
  }

  addAnswer(correctness) {
    const newState = this.state.addAnswer(this.state, `${correctness}`);
    this.updateState(newState);
  }

  updateTime(newTime) {
    const newState = this.state.setTime(this.state, newTime);
    this.updateState(newState);
  }

  resetTime() {
    const newState = this.state.resetTime(this.state);
    this.updateState(newState);
  }

  startTimer(onTick, onExpired) {
    this.timer = new Timer(this.timeLeft);
    this.timer.start(onTick, onExpired);
  }

  stopTimer() {
    this.timer.stop();
  }

  // tick() {
  //   const timer = new Timer(this.timeLeft);
  //   this.updateTime(timer.tick());
  // }

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
    return this.answersList.find((it) => it.id === id);
  }
}

export default GameModel;
