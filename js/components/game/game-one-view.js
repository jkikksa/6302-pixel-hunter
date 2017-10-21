import AbstractView from '../abstract-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import HeaderView from '../header/header-view';
import footer from '../footer/footer-view';

const update = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

class GameOneView extends AbstractView {
  constructor(data, onAnswer, answers, onBackButtonClicked) {
    super();
    this.data = data;
    this.onAnswer = onAnswer;
    this.onBackButtonClicked = onBackButtonClicked;
    this.answers = answers;
  }

  get template() {
    return `\
<div class="header-container"></div>
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${this.data.question1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${this.data.question2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    ${(new StatsBarView(this.answers)).template}
  </div>
</div>
${footer.template}`;
  }

  updateHeader(timeleft, lives) {
    update(this.headerContainer, new HeaderView(timeleft, lives, this.onBackButtonClicked));
  }

  bind() {
    this.headerContainer = this.element.querySelector(`.header-container`);
    const form = this.element.querySelector(`.game__content`);
    const firstAnswers = Array.from(form.querySelectorAll(`input[name="question1"]`));
    const secondAnswers = Array.from(form.querySelectorAll(`input[name="question2"]`));
    form.addEventListener(`change`, () => {
      const isFirstAnswerChecked = firstAnswers.some((it) => it.checked);
      const firstAnswer = firstAnswers.find((it) => it.checked);
      const isSecondAnswerChecked = secondAnswers.some((it) => it.checked);
      const secondAnswer = secondAnswers.find((it) => it.checked);

      if (isFirstAnswerChecked && isSecondAnswerChecked) {
        this.onAnswer({firstAnswer, secondAnswer});
      }
    });
  }
}

export default GameOneView;
