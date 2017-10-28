import Timer from '../../data/timer';
import {setTime, resetTime, setLives, addAnswer} from '../../data/state';

class GameModel {
  get timeLeft() {
    return this.state.timeLeft;
  }

  get answers() {
    return this.state.answers;
  }

  get lives() {
    return this.state.lives;
  }

  /**
   * Обновляет State.
   * @param {State} newState Обновленный State.
   */
  updateState(newState) {
    this.state = newState;
  }

  /**
   * Добавляет ответ.
   * @param {boolean} correctness Правильность ответа.
   */
  addAnswer(correctness) {
    const newState = addAnswer(this.state, `${correctness}`);
    this.updateState(newState);
  }

  /**
   * Обновляет время.
   * @param {number} newTime Время.
   */
  updateTime(newTime) {
    const newState = setTime(this.state, newTime);
    this.updateState(newState);
  }

  /**
   * Сбрасывает время на начальное.
   */
  resetTime() {
    const newState = resetTime(this.state);
    this.updateState(newState);
  }

  /**
   * Запускает таймер.
   * @param {Function} onTick Запускается каждый тик таймера.
   * @param {Function} onExpired Запускается после окончания работы таймера.
   */
  startTimer(onTick, onExpired) {
    this.timer = new Timer(this.timeLeft);
    this.timer.start((time) => {
      this.updateTime(time);
      onTick();
    }, onExpired);
  }

  /**
   * Останавливает таймер.
   */
  stopTimer() {
    this.timer.stop();
  }

  /**
   * Уменьшает кол-во жизней на 1.
   */
  decreaseLives() {
    const newState = setLives(this.state, --this.state.lives);
    this.updateState(newState);
  }
}

export default GameModel;
