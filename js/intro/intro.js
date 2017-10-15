import IntroView from './intro-view';
import changeView from '../router/change-view';

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  changeView(`greeting`);
};

const intro = new IntroView(onNextButtonClick);

export default () => intro;
