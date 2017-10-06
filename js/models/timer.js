/**
 * Конструктор таймера.
 * @constructor
 * @param {time} Время, на которое устанавливается таймер
 */
class Timer {
  constructor(time) {
    this.time = time < 0 ? 0 : time;
    this.isExpired = this.time === 0;
  }

  /**
   * Уменьшает время на единицу.
   * При достижении конца сообщает о том, что таймер закончен
   * @return {number|string} [description]
   */
  tick() {
    if (this.isExpired) {
      return `Таймер закончен`;
    }
    this.time--;
    if (this.time === 0) {
      this.isExpired = true;
      return `Таймер закончен`;
    }
    return this.time;
  }
}

export default Timer;
