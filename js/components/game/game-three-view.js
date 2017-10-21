import AbstractView from '../abstract-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import HeaderView from '../header/header-view';
import footer from '../footer/footer-view';

const update = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

class GameThreeView extends AbstractView {
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
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option" data-option="question1">
      <img src="${this.data.question1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected" data-option="question2">
      <img src="${this.data.question2}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option" data-option="question3">
      <img src="${this.data.question3}" alt="Option 3" width="304" height="455">
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
    const options = form.querySelectorAll(`.game__option`);
    for (const option of options) {
      option.addEventListener(`click`, () => {
        this.onAnswer(option);
      });
    }
  }
}

export default GameThreeView;
