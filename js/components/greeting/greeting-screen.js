import GreetingView from './greeting-view';
import {changeView} from '../../utils';
import App from '../../application';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init(state) {
    changeView(this.view);
    this.view.onNextButtonClick = () => {
      App.showRules(state);
    };
  }
}

export default new GreetingScreen();
