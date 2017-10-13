import introTemplate from '../views/intro';
import render from '../router/render';

export default () => {
  const intro = introTemplate();
  const nextButton = intro.querySelector(`.intro__asterisk`);

  /**
   * Переключает на экран приветствия
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    render(`greeting`);
  };

  nextButton.addEventListener(`click`, onNextButtonClick);

  return intro;
};
