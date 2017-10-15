import changeView from '../router/change-view';
// import InitialState from '../models/initial-state';

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = () => {
  changeView(`greeting`);
};

export default onBackButtonClicked;
