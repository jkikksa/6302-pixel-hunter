import getElement from './get-element';
import render from '../views/render';

import greating from './greating';

import gameThreeTemplate from '../models/game-3';

import stats from './stats';

const gameThree = getElement(gameThreeTemplate);

const backButton = gameThree.querySelector(`.back`);

const form = gameThree.querySelector(`.game__content`);
const options = Array.from(form.querySelectorAll(`.game__option`));

const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

const onOptionClicked = (evt) => {
  evt.preventDefault();
  render(stats);
};

for (const option of options) {
  option.addEventListener(`click`, onOptionClicked);
}
backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`click`, onOptionClicked);

export default gameThree;
