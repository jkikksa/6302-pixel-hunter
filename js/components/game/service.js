import changeView from '../../router/change-view';

export const onAnswerCheck = (isCorrect, state) => {

  const newLivesCount = isCorrect ? state.lives : --state.lives;
  const newState = state.addAnswer(state.setLives(state, newLivesCount), `${isCorrect}`);

  if (newState.answers.length >= 10) {
    changeView(`stats`, newState);
    return;
  }

  if (newState.lives > 0) {
    changeView(`game`, state.resetTime(newState));
    return;
  } else {
    changeView(`stats`, newState);
    return;
  }
};
