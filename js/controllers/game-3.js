import gameThreeTemplate from '../models/game-3';
import getElement from './get-element';
import greating from './greating';
import render from '../views/render';
import stats from './stats';

const gameThree = getElement(gameThreeTemplate);
const backButton = gameThree.querySelector(`.back`);
const form = gameThree.querySelector(`.game__content`);
const options = form.querySelectorAll(`.game__option`);

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

/**
 * Переключает на следующий экран
 * @param {MouseEvent} evt
 */
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
