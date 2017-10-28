import IntroView from './intro-view';
import {changeView} from '../../utils';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    changeView(this.view);
  }
}

export default new IntroScreen();
