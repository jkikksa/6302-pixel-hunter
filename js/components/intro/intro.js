import IntroView from './intro-view';
import changeView from '../../router/change-view';

export default () => {
  /**
   * Переключает на следующий экран
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    changeView(`greeting`);
  };

  const intro = new IntroView(onNextButtonClick);

  return intro;
};
