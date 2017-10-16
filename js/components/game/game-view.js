import AbstractView from '../abstract-view';
import footer from '../footer/footer';

class GameView extends AbstractView {
  constructor(data) {
    super();
    this.onAnswer = data.onAnswer;
    this.onBackButtonClicked = data.onBackButtonClicked;
    this.questionType = data.questionType;
    this.questionData = data.questionData;
    this.state = data.state;
  }

  getHeader() {
    return `\
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${this.state.timeLeft}</h1>
  ${this.getLives()}
</header>`;
  }

  getStatsBar() {
    const statsBarTemplate = this.state.answers.map((it) => {
      if (it.correctness === `correct`) {
        return `<li class="stats__result stats__result--correct"></li>`;
      } else {
        return `<li class="stats__result stats__result--wrong"></li>`;
      }
    }).concat(new Array(10 - this.state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`)).join(``);

    return `
    <ul class="stats">
      ${statsBarTemplate};
    </ul>
  `;
  }

  getLives() {
    const emptyString = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
    const fullString = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;
    return `
    <div class="game__lives">
      ${new Array(3 - this.state.lives).fill(emptyString).join(``)}
      ${new Array(this.state.lives).fill(fullString).join(``)}
    </div>
  `;
  }

  getTypeOne() {
    return `\
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${this.questionData.question1}" alt="Option 1" width="468" height="458">
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
      <img src="${this.questionData.question2}" alt="Option 2" width="468" height="458">
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
    ${this.getStatsBar()}
  </div>
</div>
${footer().template}`;
  }

  getTypeTwo() {
    return `\
<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${this.questionData.question1}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    ${this.getStatsBar()}
  </div>
</div>
${footer().template}`;
  }

  getTypeThree() {
    return `\
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option" data-option="question1">
      <img src="${this.questionData.question1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected" data-option="question2">
      <img src="${this.questionData.question2}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option" data-option="question3">
      <img src="${this.questionData.question3}" alt="Option 3" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    ${this.getStatsBar()}
  </div>
</div>
${footer().template}`;
  }

  get template() {

    switch (this.questionType) {
      case `typeOne`:
        return `
${this.getHeader()}
${this.getTypeOne()}
        `;

      case `typeTwo`:
        return `
${this.getHeader()}
${this.getTypeTwo()}
        `;

      case `typeThree`:
        return `
${this.getHeader()}
${this.getTypeThree()}
        `;
    }

    return `Ошибка!`;
  }

  bind() {
    const game = this.element;
    const form = game.querySelector(`.game__content`);
    const backButton = game.querySelector(`.back`);

    backButton.addEventListener(`click`, (evt) => {
      this.onBackButtonClicked(evt);
    });

    switch (this.questionType) {
      case `typeOne`:

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
        break;

      case `typeTwo`:
        const answers = Array.from(form.querySelectorAll(`input[name="question1"]`));
        form.addEventListener(`change`, () => {
          const isAnswerChecked = answers.some((it) => it.checked);
          const answer = answers.find((it) => it.checked);

          if (isAnswerChecked) {
            this.onAnswer({answer});
          }
        });
        break;

      case `typeThree`:
        const options = form.querySelectorAll(`.game__option`);
        for (const option of options) {
          option.addEventListener(`click`, () => {
            this.onAnswer({option});
          });
        }
        break;
    }
  }
}

export default GameView;
