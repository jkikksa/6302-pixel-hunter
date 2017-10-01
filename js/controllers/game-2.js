import gameTwoTemplate from '../views/game-2';
import getElement from './get-element';
import onBackButtonClicked from './back-button-handler';
import render from '../router/render';

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
    render(`gameThree`);
  }
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`change`, onChange);

export default gameTwo;
