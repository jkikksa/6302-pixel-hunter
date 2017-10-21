import getScore from './get-score';
import assert from 'assert';

const insufficientArray = [{
  correctness: `correct`,
  type: `normal`
}];

const quickTimeAllCorrect = Array(10).fill({
  correctness: `correct`,
  type: `fast`
});

const normalTimeAllCorrect = Array(10).fill({
  correctness: `correct`,
  type: `normal`
});

const normalTimePartiallyCorrect = Array(10).fill({
  correctness: `correct`,
  type: `normal`
}).fill({
  correctness: `incorrect`,
  type: `normal`
}, 5);

const normalTimeAllWrong = Array(10).fill({
  correctness: `incorrect`,
  type: `normal`
});

const slowTimeAllCorrect = Array(10).fill({
  correctness: `correct`,
  type: `slow`
});

const slowTimeAllWrong = Array(10).fill({
  correctness: `incorrect`,
  type: `slow`
});

describe(`Функция подсчёта очков`, () => {
  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(getScore(insufficientArray, 3).totalScore, -1);
  });

  it(`Игрок ответил на все вопросы быстро. 3 жизни осталось`, () => {
    assert.equal(getScore(quickTimeAllCorrect, 3).totalScore, 1650);
  });

  it(`Игрок ответил на все вопросы быстро. 2 жизни осталось`, () => {
    assert.equal(getScore(quickTimeAllCorrect, 2).totalScore, 1600);
    assert.equal(getScore(quickTimeAllCorrect, 2).bonusScore, 500);
    assert.equal(getScore(quickTimeAllCorrect, 2).penaltyScore, 0);
  });

  it(`Игрок ответил на все вопросы с нормальной скоростью. 3 жизни осталось`, () => {
    assert.equal(getScore(normalTimeAllCorrect, 3).totalScore, 1150);
  });

  it(`Игрок неправильно ответил на все вопросы с нормальной скоростью. 3 жизни осталось`, () => {
    assert.equal(getScore(normalTimeAllWrong, 3).totalScore, 150);
  });

  it(`Игрок ответил правильно на половину вопросов с нормальной скоростью. 2 жизни осталось`, () => {
    assert.equal(getScore(normalTimePartiallyCorrect, 2).totalScore, 600);
  });

  it(`Игрок ответил на все вопросы с нормальной скоростью. 1 жизнь осталась`, () => {
    assert.equal(getScore(normalTimeAllCorrect, 1).totalScore, 1050);
  });

  it(`Игрок ответил на все вопросы медленно. 3 жизни осталось`, () => {
    assert.equal(getScore(slowTimeAllCorrect, 3).totalScore, 650);
    assert.equal(getScore(slowTimeAllCorrect, 3).bonusScore, 0);
    assert.equal(getScore(slowTimeAllCorrect, 3).penaltyScore, -500);
  });

  it(`Игрок неправильно ответил на все вопросы медленно. 3 жизни осталось`, () => {
    assert.equal(getScore(slowTimeAllWrong, 3).totalScore, -350);
    assert.equal(getScore(slowTimeAllWrong, 3).bonusScore, 0);
    assert.equal(getScore(slowTimeAllWrong, 3).penaltyScore, -500);
  });

  it(`Игрок ответил на все вопросы медленно. 1 жизнь осталась`, () => {
    assert.equal(getScore(slowTimeAllCorrect, 1).totalScore, 550);
    assert.equal(getScore(slowTimeAllCorrect, 1).bonusScore, 0);
    assert.equal(getScore(slowTimeAllCorrect, 1).penaltyScore, -500);
  });
});
