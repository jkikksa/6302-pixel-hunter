import AbstractView from '../abstract-view';
import footer from '../footer/footer-view';
import settings from '../../data/settings';

class RulesView extends AbstractView {
  get template() {
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
  <p class="rules__description">Угадай ${settings.LEVELS_COUNT} раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится ${settings.LEVEL_TIME} секунд.<br>
    Ошибиться можно не более ${settings.LIVES} раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
${footer.template}`;
  }

  bind() {
    const rules = this.element;
    const form = rules.querySelector(`.rules__form`);
    const nameField = form.querySelector(`.rules__input`);
    const submitButton = form.querySelector(`.rules__button.continue`);
    const backButton = rules.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.onBackButtonClicked();
    });

    nameField.addEventListener(`input`, () => {
      this.onNameFieldInput(nameField, submitButton);
    });

    form.addEventListener(`submit`, (evt) => {
      this.onFormSubmit(evt, nameField);
    });
  }

  onBackButtonClicked() {

  }

  onNameFieldInput() {

  }

  onFormSubmit() {

  }

  update() {
    this._element = this.render();
    this.bind();
  }
}

export default RulesView;
