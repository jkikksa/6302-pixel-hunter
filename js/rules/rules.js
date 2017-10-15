import RulesView from './rules-view';
import changeView from '../router/change-view';
import onBackButtonClicked from '../handlers/back-button-handler';
import {state} from '../data/state';

/**
 * Отменяет отправку формы и переключает на экран игры
 * @param {Event} evt
 */
const onFormSubmit = (evt, nameField) => {
  evt.preventDefault();
  state.setName(nameField.value);
  changeView(`game`);
};

/**
 * Отключает блокировку кнопки после ввода в поле любого значения
 */
const onNameFieldInput = (nameField, submitButton) => {
  if (nameField.value.length !== 0) {
    submitButton.disabled = false;
  }
};

const rules = new RulesView(onBackButtonClicked, onNameFieldInput, onFormSubmit);

export default () => rules;
