import getElement from './get-element';
import greetingTemplate from '../views/greeting';
import render from '../router/render';

const greeting = getElement(greetingTemplate);
const nextButton = greeting.querySelector(`.greeting__continue`);

/**
 * Переключает на экран с правилами
 * @param {MouseEvent} evt
 */
const onNextButtonClick = (evt) => {
  evt.preventDefault();
  render(`rules`);
};

nextButton.addEventListener(`click`, onNextButtonClick);

export default greeting;
