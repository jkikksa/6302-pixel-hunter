import getElement from './get-element';
import render from '../views/render';

import greatingTemplate from '../models/greating';

import rules from './rules';

const greating = getElement(greatingTemplate);

const nextButton = greating.querySelector(`.greeting__continue`);

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  render(rules);
};

nextButton.addEventListener(`click`, onNextButtonClick);


export default greating;
