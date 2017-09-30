import getElement from './get-element';
import render from '../views/render';

import greating from './greating';

import rulesTemplate from '../models/rules';

import gameOne from './game-1';

const rules = getElement(rulesTemplate);
const form = rules.querySelector(`.rules__form`);
const nameField = form.querySelector(`.rules__input`);
const submitButton = form.querySelector(`.rules__button.continue`);
const backButton = rules.querySelector(`.back`);

const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

const onNameFieldInput = (evt) => {
  if (evt.target.value.length !== 0) {
    submitButton.disabled = false;
  }
};

const onSubmit = (evt) => {
  evt.preventDefault();
  render(gameOne);
};


nameField.addEventListener(`input`, onNameFieldInput);
form.addEventListener(`submit`, onSubmit);
backButton.addEventListener(`click`, onBackButtonClicked);

export default rules;
