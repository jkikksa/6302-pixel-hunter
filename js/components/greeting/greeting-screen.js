import GreetingView from './greeting-view';
import {changeView} from '../../utils';
import App from '../../application';
import Settings from '../../data/settings';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
    this.mock = this.view.render();
  }

  init(state) {
    this.view.onNextButtonClick = () => {
      App.showRules(state);
    };
    this.mock.className = `rules__fade`;
    document.body.appendChild(this.mock);
    setTimeout(() => {
      changeView(this.view);
      document.body.removeChild(this.mock);
    }, Settings.FADE_TIME);
  }
}

export default new GreetingScreen();
