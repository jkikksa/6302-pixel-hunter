import onBackButtonClicked from './back-button-handler';
import render from '../router/render';
import rulesTemplate from '../views/rules';

export default (state) => {
  const rules = rulesTemplate();
  const form = rules.querySelector(`.rules__form`);
  const nameField = form.querySelector(`.rules__input`);
  const submitButton = form.querySelector(`.rules__button.continue`);
  const backButton = rules.querySelector(`.back`);

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
    state.playerName = nameField.value;
    render(`game`, state);
  };

  backButton.addEventListener(`click`, onBackButtonClicked);
  form.addEventListener(`submit`, onFormSubmit);
  nameField.addEventListener(`input`, onNameFieldInput);

  return rules;
};
