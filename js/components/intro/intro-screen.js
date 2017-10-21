import IntroView from './intro-view';
import {changeView} from '../../utils';
import App from '../../application';


class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    changeView(this.view);
    this.view.onNextButtonClick = () => {

      App.showGreeting();
    };
  }
}

export default new IntroScreen();
