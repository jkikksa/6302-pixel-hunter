import AbstractView from '../abstract-view';

class HeaderView extends AbstractView {
  constructor(timeleft) {
    super();
    this.timeLeft = timeleft;
  }

  get template() {
    return `\
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${this.timeLeft}</h1>
  {this.getLives()}
</header>`;
  }
}

export default HeaderView;
