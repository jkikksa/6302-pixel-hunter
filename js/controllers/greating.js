import getElement from './get-element';
import greatingTemplate from '../models/greating';
import render from '../views/render';
import rules from './rules';

const greating = getElement(greatingTemplate);
const nextButton = greating.querySelector(`.greeting__continue`);

/**
 * Переключает на экран с правилами
 * @param {MouseEvent} evt
 */
const onNextButtonClick = (evt) => {
  evt.preventDefault();
  render(rules);
};

nextButton.addEventListener(`click`, onNextButtonClick);

export default greating;
