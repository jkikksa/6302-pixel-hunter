import IntroView from './intro-view';
import changeView from '../../router/change-view';
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
