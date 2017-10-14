import render from '../router/render';

export default (element, state, answer) => {
  const form = element.querySelector(`.game__content`);
  const options = form.querySelectorAll(`.game__option`);

  /**
   * Переключает на следующий экран
   * @param {MouseEvent} evt
   */
  const onOptionClicked = (evt) => {
    const isAnswerRight = answer[evt.target.dataset.option] === `paint`;

    state.setAnswer(isAnswerRight, `normal`);
    if (!isAnswerRight) {
      state.decreaseLive();
    }

    if (state.lives > 0) {
      render(`game`, state);
    } else {
      render(`stats`, state);
    }
  };

  for (const option of options) {
    option.addEventListener(`click`, onOptionClicked);
  }

};
