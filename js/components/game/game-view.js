import AbstractView from '../abstract-view';
import footer from '../footer/footer-view';
import HeaderView from '../header/header-view';
import GameOneView from './game-one-view';
import GameTwoView from './game-two-view';
import GameThreeView from './game-three-view';

const update = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

class GameView extends AbstractView {
  constructor(onBackButtonClicked) {
    super();
    this.onBackButtonClicked = onBackButtonClicked;
  }

  get template() {

    return `\
<div class="header-container"></div>
<div class="game-container"></div>
${footer.template}`;
  }

  updateHeader(timeleft, lives) {
    update(this.headerContainer, new HeaderView(timeleft, lives, this.onBackButtonClicked));
  }

  updateGame(question, onAnswer, answers = []) {
    switch (question.type) {
      case `typeOne`:
        update(this.gameContainer, new GameOneView(question.data, onAnswer, answers));
        break;
      case `typeTwo`:
        update(this.gameContainer, new GameTwoView(question.data, onAnswer, answers));
        break;
      case `typeThree`:
        update(this.gameContainer, new GameThreeView(question.data, onAnswer, answers));
        break;
    }
  }

  bind() {
    this.headerContainer = this.element.querySelector(`.header-container`);
    this.gameContainer = this.element.querySelector(`.game-container`);
  }
}

export default GameView;
