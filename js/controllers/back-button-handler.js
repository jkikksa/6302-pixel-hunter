import render from '../router/render';

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
export default (evt) => {
  evt.preventDefault();
  render(`greeting`);
};
