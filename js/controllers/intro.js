import getElement from './get-element';
import introTemplate from '../views/intro';
import render from '../router/render';

export default (state) => {
  console.log(state);
  const intro = getElement(introTemplate);
  const nextButton = intro.querySelector(`.intro__asterisk`);

  /**
   * Переключает на экран приветствия
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    render(`greeting`, state);
  };

  nextButton.addEventListener(`click`, onNextButtonClick);

  return intro;
};
