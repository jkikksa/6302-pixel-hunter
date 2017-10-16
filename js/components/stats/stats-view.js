import AbstractView from '../abstract-view';
import footer from '../footer/footer';

class StatsView extends AbstractView {
  constructor(onBackButtonClicked, score, state) {
    super();
    this.score = score;
    this.state = state;
    this.onBackButtonClicked = onBackButtonClicked;
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
  <h1>${this.score === -1 ? `Поражение` : `Победа!`}</h1>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        ${this.getStatsBar()}
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">900</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">50</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">100</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">-100</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">${this.score === -1 ? `FAIL` : this.score}</td>
    </tr>
  </table>
</div>
${footer().template}`;
  }

  bind() {
  }
}

export default StatsView;
