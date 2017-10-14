import greetingTemplate from '../views/greeting';
import render from '../router/render';

export default () => {
  const greeting = greetingTemplate();
  const nextButton = greeting.querySelector(`.greeting__continue`);

  /**
   * Переключает на экран с правилами
   * @param {MouseEvent} evt
   */
  const onNextButtonClick = (evt) => {
    evt.preventDefault();
    render(`rules`);
  };

  nextButton.addEventListener(`click`, onNextButtonClick);

  return greeting;
};
