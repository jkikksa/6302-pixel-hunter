import gameThreeTemplate from '../views/game-3';
import getElement from './get-element';
import onBackButtonClicked from './back-button-handler';
import render from '../router/render';

const gameThree = getElement(gameThreeTemplate);
const backButton = gameThree.querySelector(`.back`);
const form = gameThree.querySelector(`.game__content`);
const options = form.querySelectorAll(`.game__option`);

/**
 * Переключает на следующий экран
 * @param {MouseEvent} evt
 */
const onOptionClicked = (evt) => {
  evt.preventDefault();
  render(`stats`);
};

for (const option of options) {
  option.addEventListener(`click`, onOptionClicked);
}
backButton.addEventListener(`click`, onBackButtonClicked);

export default gameThree;
