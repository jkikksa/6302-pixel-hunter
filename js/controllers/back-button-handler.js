import render from '../router/render';
import InitialState from '../models/initial-state';

/**
 * Возвращает на экран приветствия
 * @param {MouseEvent} evt
 */
export default (evt) => {
  evt.preventDefault();
  const state = new InitialState();
  render(`greeting`, state);
};
