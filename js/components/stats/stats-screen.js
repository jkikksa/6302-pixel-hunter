import StatsView from './stats-view';
import StatsModel from './stats-model';
import {changeView} from '../../utils';
import App from '../../application';

class StatsScreen {
  constructor() {
    this.model = new StatsModel();
  }

  init(state) {
    this.model.updateState(state);
    this.view = new StatsView(this.model.score, this.model.answers);
    changeView(this.view);

    this.view.onBackButtonClicked = () => {
      App.showGreeting();
      history.pushState(``, document.title, window.location.pathname);
    };
  }
}

export default new StatsScreen();

