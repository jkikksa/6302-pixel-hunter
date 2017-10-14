import GreetingView from './greeting-view';
import changeView from '../router/change-view';

const greeting = new GreetingView();

greeting.onNextButtonClick = (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  // changeView(`greeting`);
};

export default () => greeting;
