import getElement from './get-element';
import render from '../views/render';

import greating from './greating';

import gameTwoTemplate from '../models/game-2';

import gameThree from './game-3';

const gameTwo = getElement(gameTwoTemplate);

const backButton = gameTwo.querySelector(`.back`);

const form = gameTwo.querySelector(`.game__content`);

const firstAnswers = Array.from(form.querySelectorAll(`input[name="question1"]`));

const onChange = () => {
  if (firstAnswers.some((it) => it.checked)) {
    render(gameThree);
  }
};

const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`change`, onChange);

export default gameTwo;
