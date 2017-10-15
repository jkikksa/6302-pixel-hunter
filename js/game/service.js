import changeView from '../router/change-view';
import {state} from '../data/state';

export const onAnswerCheck = (isCorrect) => {
  state.addAnswer(isCorrect, `normal`);

  if (!isCorrect) {
    state.decreaseLives();
  }

  if (state.answers.length >= 10) {
    changeView(`stats`);
    return;
  }

  if (state.lives > 0) {
    changeView(`game`);
  } else {
    changeView(`stats`);
  }
};
