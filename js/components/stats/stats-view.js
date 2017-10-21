import AbstractView from '../abstract-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import footer from '../footer/footer-view';

class StatsView extends AbstractView {
  constructor(score, answers) {
    super();
    this.score = score;
    this.answers = answers;
  }

  get winTemplate() {
    return `\
<h1>Победа!</h1>
<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      ${(new StatsBarView(this.answers)).template}
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${this.score.answersScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${this.score.bonusCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${this.score.bonusScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${this.score.livesCount}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${this.score.livesScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${this.score.penaltyCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${this.score.penaltyScore}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${this.score.totalScore}</td>
  </tr>
</table>`;
  }

  get loseTemplate() {
    return `
<h1>Поражение</h1>
<table class="result__table">
  <tr>
    <td>
      ${(new StatsBarView(this.answers)).template}
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>`;
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
</header>
<div class="result">
${this.score.totalScore === -1 ? this.loseTemplate : this.winTemplate}
</div>
${footer.template}`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.onBackButtonClicked();
    });
  }

  onBackButtonClicked() {

  }
}

export default StatsView;
