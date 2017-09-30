import getElement from './get-element';
import render from '../views/render';

import greating from './greating';

import gameOneTemplate from '../models/game-1';

import gameTwo from './game-2';

const gameOne = getElement(gameOneTemplate);

const backButton = gameOne.querySelector(`.back`);

const form = gameOne.querySelector(`.game__content`);

const firstAnswers = Array.from(form.querySelectorAll(`input[name="question1"]`));
const secondAnswers = Array.from(form.querySelectorAll(`input[name="question2"]`));

const onChange = () => {
  if (firstAnswers.some((it) => it.checked) && secondAnswers.some((it) => it.checked)) {
    render(gameTwo);
  }
};

const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`change`, onChange);

export default gameOne;
