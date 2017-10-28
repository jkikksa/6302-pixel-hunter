import AbstractView from '../abstract-view';
import StatsBarView from '../stats-bar/stats-bar-view';
import footer from '../footer/footer-view';

class StatsView extends AbstractView {
  constructor(gameStatistics) {
    super();
    this.gameStatistics = gameStatistics;
  }

  getWinTemplate(score, answers, index) {
    return `\
${index === 1 ? `<h1>Победа!</h1>` : ``}
<table class="result__table">
  <tr>
    <td class="result__number">${index}.</td>
    <td colspan="2">
      ${(new StatsBarView(answers)).template}
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${score.answersScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${score.bonusCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${score.bonusScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${score.livesCount}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${score.livesScore}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${score.penaltyCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${score.penaltyScore}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${score.totalScore}</td>
  </tr>
</table>`;
  }

  getLoseTemplate(answers, index) {
    return `
${index === 1 ? `<h1>Поражение</h1>` : ``}
<table class="result__table">
  <tr>
    <td class="result__number">${index}.</td>
    <td>
      ${(new StatsBarView(answers)).template}
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
${this.gameStatistics.map((it, index) => it.score.totalScore === -1 ? this.getLoseTemplate(it.answers, index + 1) : this.getWinTemplate(it.score, it.answers, index + 1)).join(``)}
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
