import GreetingView from './greeting-view';
import changeView from '../../router/change-view';

export default (state) => {

  /**
   * Переключает на следующий экран
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    changeView(`rules`, state);
  };

  const greeting = new GreetingView(onNextButtonClick);

  return greeting;
};
