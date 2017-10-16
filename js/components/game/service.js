import changeView from '../../router/change-view';
// import {state} from '../../data/state';

/**
 * По результату ответа пользователя делает какие-то действия
 * @param {boolean} isCorrect Тип ответа. Правильный или неправильный.
 */
export const onAnswerCheck = (isCorrect, state) => {

  const newLivesCount = isCorrect ? state.lives : --state.lives;
  const newState = state.addAnswer(state.setLives(state, newLivesCount), `${isCorrect}`, `normal`);

  if (newState.answers.length >= 10) {
    changeView(`stats`, newState);
    return;
  }

  if (newState.lives > 0) {
    changeView(`game`, newState);
    return;
  } else {
    changeView(`stats`, newState);
    return;
  }
};
