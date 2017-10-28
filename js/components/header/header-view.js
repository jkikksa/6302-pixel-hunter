import AbstractView from '../abstract-view';

class HeaderView extends AbstractView {
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
  <div class="game__lives">
    ${new Array(3 - this.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(this.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
</header>`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    this.timer = this.element.querySelector(`.game__timer`);

    backButton.addEventListener(`click`, () => {
      this.onBackButtonClicked();
    });
  }

  update(timeleft, lives, onBackButtonClicked) {
    this.timeLeft = timeleft;
    this.lives = lives;
    this.onBackButtonClicked = onBackButtonClicked;
  }

  updateTime(timeleft) {
    this.timer.textContent = timeleft;
  }

  onSoonExpired() {
    this.timer.classList.add(`game__timer--flash`);
  }
}

export default HeaderView;
