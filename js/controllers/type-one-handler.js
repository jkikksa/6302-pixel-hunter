import render from '../router/render';

export default (element, state) => {
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
    if (firstAnswers.some((it) => it.checked) && secondAnswers.some((it) => it.checked)) {
      render(`question1`, state);
    }
  };
  form.addEventListener(`change`, onChange);
};
