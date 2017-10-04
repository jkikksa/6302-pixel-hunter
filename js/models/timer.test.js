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

  it(`Установлено время равное 4`, () => {
    const newTimer = new Timer(4);
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    assert.equal(newTimer.tick(), `Таймер закончен`);
    assert.equal(newTimer.tick(), `Таймер закончен`);
    assert.equal(newTimer.tick(), `Таймер закончен`);
  });

  it(`Установлено время равное 10`, () => {
    const newTimer = new Timer(10);
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    newTimer.tick();
    assert.equal(newTimer.tick(), `Таймер закончен`);
  });
});
