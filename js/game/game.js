import getAnswer from '../models__old/get-answer';
import getQuestion from '../models__old/get-question';
import GameView from './game-view';
import onBackButtonClicked from '../handlers/back-button-handler';
import {onAnswerCheck} from './service';
import {state} from '../data/state';

export default () => {
  const {id: questionId, type: questionType, data: questionData} = getQuestion();
  const rightAnswer = getAnswer(questionId);

  const onAnswer = (answerObject) => {

    switch (questionType) {
      case `typeOne`:
        const {firstAnswer, secondAnswer} = answerObject;
        const isFirstAnswerRight = firstAnswer.value === rightAnswer.data.question1;
        const isSecondAnswerRight = secondAnswer.value === rightAnswer.data.question2;

        onAnswerCheck(isFirstAnswerRight && isSecondAnswerRight);
        break;

      case `typeTwo`:
        const {answer} = answerObject;
        const isAnswerRight = answer.value === rightAnswer.data.question1;

        onAnswerCheck(isAnswerRight);
        break;

      case `typeThree`:
        const {option} = answerObject;
        const isOptionRight = rightAnswer.data[option.dataset.option] === `paint`;

        onAnswerCheck(isOptionRight);
        break;
    }
  };

  const game = new GameView({onAnswer, questionType, questionData, state, onBackButtonClicked});

  return game;
};
