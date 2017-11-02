import GreetingView from './greeting-view';
import {changeView} from '../../utils';
import App from '../../application';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init(state) {
    this.view.onNextButtonClick = () => {
      App.showRules(state);
    };
    this.view.showPreview(() => {
      changeView(this.view);
    });
  }
}

export default new GreetingScreen();
