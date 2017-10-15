import AbstractView from '../abstract-view';
import footer from '../footer/footer';

class RulesView extends AbstractView {
  constructor(onBackButtonClicked, onNameFieldInput, onFormSubmit) {
    super();
    this.onBackButtonClicked = onBackButtonClicked;
    this.onNameFieldInput = onNameFieldInput;
    this.onFormSubmit = onFormSubmit;
  }

  getTemplate() {
    return `\
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
${footer().getTemplate()}`;
  }

  bind() {
    const rules = this.getElement();
    const form = rules.querySelector(`.rules__form`);
    const nameField = form.querySelector(`.rules__input`);
    const submitButton = form.querySelector(`.rules__button.continue`);
    const backButton = rules.querySelector(`.back`);

    backButton.addEventListener(`click`, (evt) => {
      this.onBackButtonClicked(evt);
    });

    nameField.addEventListener(`input`, () => {
      this.onNameFieldInput(nameField, submitButton);
    });

    form.addEventListener(`submit`, (evt) => {
      this.onFormSubmit(evt, nameField);
    });
  }
}

export default RulesView;
