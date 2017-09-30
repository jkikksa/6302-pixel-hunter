import gameOne from './game-1';
import getElement from './get-element';
import greating from './greating';
import render from '../views/render';
import rulesTemplate from '../models/rules';

const rules = getElement(rulesTemplate);
const form = rules.querySelector(`.rules__form`);
const nameField = form.querySelector(`.rules__input`);
const submitButton = form.querySelector(`.rules__button.continue`);
const backButton = rules.querySelector(`.back`);

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = (evt) => {
  evt.preventDefault();
  render(greating);
};

/**
 * Отключает блокировку кнопки после ввода в поле любого значения
 */
const onNameFieldInput = () => {
  if (nameField.value.length !== 0) {
    submitButton.disabled = false;
  }
};

/**
 * Отменяет отправку формы и переключает на экран игры
 * @param {Event} evt
 */
const onFormSubmit = (evt) => {
  evt.preventDefault();
  render(gameOne);
};

backButton.addEventListener(`click`, onBackButtonClicked);
form.addEventListener(`submit`, onFormSubmit);
nameField.addEventListener(`input`, onNameFieldInput);

export default rules;
