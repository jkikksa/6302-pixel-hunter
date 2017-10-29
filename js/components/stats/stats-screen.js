import StatsView from './stats-view';
import StatsModel from './stats-model';
import {changeView} from '../../utils';
import App from '../../application';
import APIService from '../../api-service';

class StatsScreen {
  constructor() {
    this.model = new StatsModel();
  }

  async init(state) {
    this.model.updateState(state);
    this.model.gameStatistics = await APIService.loadStatistics(this.model.playerName);
    this.view = new StatsView(this.model.gameStatistics);
    changeView(this.view);

    this.view.onBackButtonClicked = () => {
      App.startGame();
      history.pushState(``, document.title, window.location.pathname);
    };
  }
}

export default new StatsScreen();

