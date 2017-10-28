import AbstractView from '../abstract-view';
import HeaderView from '../header/header-view';

const update = (container, element) => {
  container.innerHTML = ``;
  container.appendChild(element);
};

class GameView extends AbstractView {
  constructor(onBackButtonClicked) {
    super();
    this.HeaderView = new HeaderView();
    this.onBackButtonClicked = onBackButtonClicked;
  }

  updateHeader(timeleft, lives) {
    this.HeaderView.update(timeleft, lives, this.onBackButtonClicked);
    const headerContainer = this.element.querySelector(`.header-container`);
    update(headerContainer, this.HeaderView.element);
  }

  updateTime(timeleft) {
    this.HeaderView.updateTime(timeleft);
  }

  onSoonExpired() {
    this.HeaderView.onSoonExpired();
  }
}

export default GameView;
