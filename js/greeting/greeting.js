import GreetingView from './greeting-view';
import changeView from '../router/change-view';

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  changeView(`rules`);
};

const greeting = new GreetingView(onNextButtonClick);

export default () => greeting;
