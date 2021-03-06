import AbstractView from '../abstract-view';
import {Settings, AnswerType, Correctness} from '../../data/settings';

class StatsBarView extends AbstractView {
  constructor(answers) {
    super();
    this.answers = answers;
  }

  get template() {
    const statsBarTemplate = this.answers.map((it) => {
      if (it.correctness === Correctness.CORRECT) {
        switch (it.type) {
          case AnswerType.FAST:
            return `<li class="stats__result stats__result--fast"></li>`;
          case AnswerType.SLOW:
            return `<li class="stats__result stats__result--slow"></li>`;
          default:
            return `<li class="stats__result stats__result--correct"></li>`;
        }
      } else {
        return `<li class="stats__result stats__result--wrong"></li>`;
      }
    }).concat(new Array(Settings.LEVELS_COUNT - this.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`)).join(``);
    return `\
<ul class="stats">
  ${statsBarTemplate};
</ul>`;
  }
}

export default StatsBarView;
