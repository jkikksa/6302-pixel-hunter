import getElement from './get-element';
import render from '../views/render';

import greating from './greating';

import statsTemplate from '../models/stats';

const stats = getElement(statsTemplate);

const backButton = stats.querySelector(`.back`);

const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

backButton.addEventListener(`click`, onBackButtonClicked);

export default stats;
