/**
 * Конструктор таймера.
 * @constructor
 * @param {time} Время, на которое устанавливается таймер
 */
class Timer {
  constructor(time) {
    this.time = time < 0 ? 0 : time;
    this.isExpired = this.time < 0;
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
    if (this.time <= 0) {
      this.isExpired = true;
      return `Таймер закончен`;
    }
    return this.time;
  }

  /**
   * Запускает таймер.
   * @param {Function} onTick Callback. Вызывает каждый тик.
   * @param {Function} onExpired Callback. Вызывает после окончания таймера.
   */
  start(onTick, onExpired) {
    this.timer = setTimeout(() => {
      if (this.isExpired) {
        this.stop();
        onExpired();
        return;
      }
      this.tick();
      onTick(this.time);
      this.start(onTick, onExpired);
    }, 1000);
  }

  /**
   * Останавливает таймер
   */
  stop() {
    clearTimeout(this.timer);
  }
}

export default Timer;
