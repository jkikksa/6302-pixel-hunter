import gameOneTemplate from '../models/game-1';
import gameTwo from './game-2';
import getElement from './get-element';
import greating from './greating';
import render from '../views/render';

const gameOne = getElement(gameOneTemplate);
const backButton = gameOne.querySelector(`.back`);
const form = gameOne.querySelector(`.game__content`);

/**
 * Список вариантов ответа (чекбоксы) первого вопроса
 * @type {Array<Element>}
 */
const firstAnswers = Array.from(form.querySelectorAll(`input[name="question1"]`));

/**
 * Список вариантов ответа (чекбоксы) первого вопроса
 * @type {Array<Element>}
 */
const secondAnswers = Array.from(form.querySelectorAll(`input[name="question2"]`));

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

/**
 * В случае, если два ответа выбраны переключает на следующий экран
 */
const onChange = () => {
  if (firstAnswers.some((it) => it.checked) && secondAnswers.some((it) => it.checked)) {
    render(gameTwo);
  }
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`change`, onChange);

export default gameOne;
