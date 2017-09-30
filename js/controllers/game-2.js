import gameThree from './game-3';
import gameTwoTemplate from '../models/game-2';
import getElement from './get-element';
import greating from './greating';
import render from '../views/render';

const gameTwo = getElement(gameTwoTemplate);
const backButton = gameTwo.querySelector(`.back`);
const form = gameTwo.querySelector(`.game__content`);

/**
 * Список вариантов ответа (чекбоксы)
 * @type {Array<Element>}
 */
const answers = Array.from(form.querySelectorAll(`input[name="question1"]`));

/**
 * Если выбран ответ, то переключает на следующий экран
 */
const onChange = () => {
  if (answers.some((it) => it.checked)) {
    render(gameThree);
  }
};

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`change`, onChange);

export default gameTwo;
