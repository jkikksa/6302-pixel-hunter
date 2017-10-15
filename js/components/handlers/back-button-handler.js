import changeView from '../../router/change-view';

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
const onBackButtonClicked = () => {
  changeView(`greeting`);
};

export default onBackButtonClicked;
