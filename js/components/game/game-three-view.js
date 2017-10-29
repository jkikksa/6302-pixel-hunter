import GameView from './game-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import footer from '../footer/footer-view';

class GameThreeView extends GameView {
  constructor(data, onAnswer, answers, onBackButtonClicked) {
    super(onBackButtonClicked);
    this.data = data;
    this.onAnswer = onAnswer;
    this.answers = answers;
    [{image: this.imageOne}, {image: this.imageTwo}, {image: this.imageThree}] = this.data.answers;
  }

  get template() {
    return `\
<div class="header-container"></div>
<div class="game">
  <p class="game__task">${this.data.question}</p>
  <form class="game__content  game__content--triple">
    <div class="game__option" data-option="0">
      <img src="${this.imageOne.url}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected" data-option="1">
      <img src="${this.imageTwo.url}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option" data-option="2">
      <img src="${this.imageThree.url}" alt="Option 3" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    ${(new StatsBarView(this.answers)).template}
  </div>
</div>
${footer.template}`;
  }

  bind() {
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
