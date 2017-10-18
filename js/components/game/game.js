import getAnswer from '../../data/get-answer';
import getQuestion from '../../data/get-question';
import GameView from './game-view';
import onBackButtonClicked from '../handlers/back-button-handler';
import {onAnswerCheck} from './service';
import Timer from '../../data/timer';

export default (state) => {
  const {id: questionId, type: questionType, data: questionData} = getQuestion();
  const rightAnswer = getAnswer(questionId);

  /**
   * Проверяет правильность ответа. Вызывает сервисную функцию с результатом проверки.
   * @param {Object} answerObject Ответ пользователя.
   */
  const onAnswer = (answerObject) => {
    switch (questionType) {
      case `typeOne`:
        const {firstAnswer, secondAnswer} = answerObject;
        const isFirstAnswerRight = firstAnswer.value === rightAnswer.data.question1;
        const isSecondAnswerRight = secondAnswer.value === rightAnswer.data.question2;
        onAnswerCheck(isFirstAnswerRight && isSecondAnswerRight, state);
        break;

      case `typeTwo`:
        const {answer} = answerObject;
        const isAnswerRight = answer.value === rightAnswer.data.question1;
        onAnswerCheck(isAnswerRight, state);
        break;

      case `typeThree`:
        const {option} = answerObject;
        const isOptionRight = rightAnswer.data[option.dataset.option] === `paint`;
        onAnswerCheck(isOptionRight, state);
        break;
    }
  };

  const game = new GameView({onAnswer, questionType, questionData, state, onBackButtonClicked});

  const startTimer = (oldState) => {
    const tmr = setTimeout(() => {
      const timer = new Timer(oldState.timeLeft);
      const newState = oldState.setTime(oldState, timer.tick());
      game.updateTime(newState.timeLeft);
      if (newState.timeLeft <= 0) {
        clearTimeout(tmr);
        // onAnswerCheck(false, newState);
        return;
      }
      startTimer(newState);
      state = newState;
    }, 1000);
  };

  startTimer(state);

  return game;
};
