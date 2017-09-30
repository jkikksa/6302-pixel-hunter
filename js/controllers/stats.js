import getElement from './get-element';
import greating from './greating';
import render from '../views/render';
import statsTemplate from '../models/stats';

const stats = getElement(statsTemplate);
const backButton = stats.querySelector(`.back`);

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

backButton.addEventListener(`click`, onBackButtonClicked);

export default stats;
