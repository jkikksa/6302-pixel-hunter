import getElement from './get-element';
import greating from './greating';
import introTemplate from '../models/intro';
import render from '../views/render';

const intro = getElement(introTemplate);
const nextButton = intro.querySelector(`.intro__asterisk`);

/**
 * Переключает на экран приветствия
 * @param {MouseEvent} evt
 */
const onNextButtonClick = (evt) => {
  evt.preventDefault();
  render(greating);
};

nextButton.addEventListener(`click`, onNextButtonClick);

export default intro;
