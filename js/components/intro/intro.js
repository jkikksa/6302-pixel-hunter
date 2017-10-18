import IntroView from './intro-view';
import changeView from '../../router/change-view';

export default (state) => {
  /**
   * Переключает на следующий экран
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    changeView(`greeting`, state);
  };

  const intro = new IntroView(onNextButtonClick);

  return intro;
};
