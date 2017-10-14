import render from '../router/render';

export default (element, state, answer) => {
  const form = element.querySelector(`.game__content`);

  /**
   * Список вариантов ответа (чекбоксы) первого вопроса
   * @type {Array<Element>}
   */
  const firstAnswers = Array.from(form.querySelectorAll(`input[name="question1"]`));

  /**
   * Список вариантов ответа (чекбоксы) первого вопроса
   * @type {Array<Element>}
   */
  const secondAnswers = Array.from(form.querySelectorAll(`input[name="question2"]`));

  /**
   * В случае, если два ответа выбраны переключает на следующий экран
   */
  const onChange = () => {
    const isFirstAnswersChecked = firstAnswers.some((it) => it.checked);
    const isSecondAnswersChecked = secondAnswers.some((it) => it.checked);

    const isFirstAnswerRight = firstAnswers.some((it) => {
      if (it.checked) {
        return it.value === answer.question1;
      }
      return false;
    });

    const isSecondAnswerRight = secondAnswers.some((it) => {
      if (it.checked) {
        return it.value === answer.question2;
      }
      return false;
    });

    const isAllAnwersRight = isFirstAnswerRight && isSecondAnswerRight;

    if (isFirstAnswersChecked && isSecondAnswersChecked) {
      state.setAnswer(isAllAnwersRight, `normal`);

      if (!isAllAnwersRight) {
        state.decreaseLive();
      }

      if (state.lives > 0) {
        render(`game`, state);
      } else {
        render(`stats`, state);
      }
    }
  };
  form.addEventListener(`change`, onChange);
};
