const EXPIRED_TIME = 0;
const SECOND = 1000;

/**
 * Конструктор таймера.
 * @constructor
 * @param {time} Время, на которое устанавливается таймер
 */
class Timer {
  constructor(time) {
    this.time = time < EXPIRED_TIME ? EXPIRED_TIME : time;
    this.isExpired = this.time < EXPIRED_TIME;
  }

  /**
   * Уменьшает время на единицу.
   * При достижении конца сообщает о том, что таймер закончен
   * @return {number|string}
   */
  tick() {
    if (this.isExpired) {
      return `Таймер закончен`;
    }
    this.time--;
    if (this.time <= EXPIRED_TIME) {
      this.isExpired = true;
      return `Таймер закончен`;
    }
    return this.time;
  }

  /**
   * Запускает таймер.
   * @param {Function} onTick Запускается каждый тик таймера.
   * @param {Function} onExpired Запускается после окончания работы таймера.
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
    }, SECOND);
  }

  /**
   * Останавливает таймер
   */
  stop() {
    clearTimeout(this.timer);
  }
}

export default Timer;
