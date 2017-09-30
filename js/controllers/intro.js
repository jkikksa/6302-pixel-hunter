import getElement from './get-element';
import render from '../views/render';

import introTemplate from '../models/intro';

import greating from './greating';

const intro = getElement(introTemplate);
const nextButton = intro.querySelector(`.intro__asterisk`);

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  render(greating);
};

nextButton.addEventListener(`click`, onNextButtonClick);

export default intro;
