import gameTemplate from '../views/game';
import getAnswer from '../models/get-answer';
import getQuestion from '../models/get-question';
import onBackButtonClicked from './back-button-handler';
import typeOneHandler from './type-one-handler';
import typeThreeHandler from './type-three-handler';
import typeTwoHandler from './type-two-handler';

export default (state) => {
  console.log(state);

  const map = {
    typeOne: typeOneHandler,
    typeTwo: typeTwoHandler,
    typeThree: typeThreeHandler
  };

  const {id: questionId, type: questionType, data: questionData} = getQuestion();

  const answer = getAnswer(questionId);

  const element = gameTemplate(state, questionType, questionData);

  map[questionType](element, state, answer.data);
  const backButton = element.querySelector(`.back`);

  backButton.addEventListener(`click`, onBackButtonClicked);

  return element;
};
