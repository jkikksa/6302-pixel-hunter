import AbstractView from '../abstract-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import HeaderView from '../header/header-view';
import footer from '../footer/footer-view';

const update = (container, element) => {
  container.innerHTML = ``;
  container.appendChild(element);
};

class GameTwoView extends AbstractView {
  constructor(image, onAnswer, answers, onBackButtonClicked) {
    super();
    this.image = image;
    this.onAnswer = onAnswer;
    this.onBackButtonClicked = onBackButtonClicked;
    this.answers = answers;
    this.HeaderView = new HeaderView();
  }

  get template() {
    return `\
<div class="header-container"></div>
<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${this.image.url}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="painting">
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
    this.HeaderView.update(timeleft, lives, this.onBackButtonClicked);
    update(this.headerContainer, this.HeaderView.element);
  }

  updateTime(timeleft) {
    this.HeaderView.updateTime(timeleft);
  }

  onSoonExpired() {
    this.HeaderView.onSoonExpired();
  }

  bind() {
    this.headerContainer = this.element.querySelector(`.header-container`);
    const form = this.element.querySelector(`.game__content`);
    const answers = Array.from(form.querySelectorAll(`input[name="question1"]`));
    form.addEventListener(`change`, () => {
      const isAnswerChecked = answers.some((it) => it.checked);
      const answer = answers.find((it) => it.checked);

      if (isAnswerChecked) {
        this.onAnswer(answer);
      }
    });
  }
}

export default GameTwoView;
