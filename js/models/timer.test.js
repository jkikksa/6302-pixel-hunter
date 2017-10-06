import Timer from './timer';
import assert from 'assert';

describe(`Функция создания таймера`, () => {
  it(`Установлено время равное -1`, () => {
    const newTimer = new Timer(-1);
    assert.equal(newTimer.tick(), `Таймер закончен`);
  });

  it(`Установлено время равное 0`, () => {
    const newTimer = new Timer(0);
    assert.equal(newTimer.tick(), `Таймер закончен`);
  });

  it(`Каждый тик возвращает время`, () => {
    const newTimer = new Timer(10);
    let n = 9;
    while (n > 0) {
      assert.equal(newTimer.tick(), n--);
    }
  });

  it(`Установлено время равное 10`, () => {
    const newTimer = new Timer(10);
    let n = 9;
    while (n > 0) {
      newTimer.tick();
      n--;
    }
    assert.equal(newTimer.tick(), `Таймер закончен`);
  });
});
