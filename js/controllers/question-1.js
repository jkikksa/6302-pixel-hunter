import gameOneTemplate from '../views/question-1';
import getElement from './get-element';
import onBackButtonClicked from './back-button-handler';
import typeOneHandler from './type-one-handler';


export default (state) => {
  console.log(state);

  const {template, questionId} = gameOneTemplate(state);

  const element = getElement(template);
  typeOneHandler(element, state);
  const backButton = element.querySelector(`.back`);


  backButton.addEventListener(`click`, onBackButtonClicked);

  return element;
};
