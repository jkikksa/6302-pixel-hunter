import GreetingView from './greeting-view';
import changeView from '../../router/change-view';
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
