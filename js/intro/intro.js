import IntroView from './intro-view';
import changeView from '../router/change-view';

const intro = new IntroView();

intro.onNextButtonClick = (evt) => {
  evt.preventDefault();
  changeView(`greeting`);
};

export default () => intro;
