import GreetingView from './greeting-view';
import {changeView} from '../../utils';
import App from '../../application';

const ANIMATION_TIME = 600;

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
    this.screenPreview = this.view.render();
  }

  init(state) {
    this.view.onNextButtonClick = () => {
      App.showRules(state);
    };
    this.screenPreview.className = `rules__fade`;
    document.body.appendChild(this.screenPreview);
    setTimeout(() => {
      changeView(this.view);
      document.body.removeChild(this.screenPreview);
    }, ANIMATION_TIME);
  }
}

export default new GreetingScreen();
