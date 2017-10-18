import AbstractView from '../abstract-view';

class GameThreeView extends AbstractView {
  constructor(data, onAnswer) {
    super();
    this.data = data;
    this.onAnswer = onAnswer;
  }

  get template() {
    return `\
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
    {this.getStatsBar()}
  </div>
</div>`;
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    const options = form.querySelectorAll(`.game__option`);
    for (const option of options) {
      option.addEventListener(`click`, () => {
        this.onAnswer({ option });
      });
    }
  }
}

export default GameThreeView;
