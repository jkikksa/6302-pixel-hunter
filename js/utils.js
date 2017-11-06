import {State as initialState} from './data/state';

/**
 * Создаёт из текстового шаблона DOM-элемент
 * @param {string} template
 * @return {Element}
 */
export const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

/**
 * Блок, в котором показываются экраны
 * @type {Element}
 */
const container = document.querySelector(`main.central`);

/**
 * Показывает необходимый экран
 * @param {Object} view Экран
 */
export const changeView = (view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

/**
 * Преобразует State в строку
 * @param {Object} state
 * @return {string}
 */
export const saveState = (state) => {
  return JSON.stringify(state);
};

/**
 * Парсит строку в State
 * @param {string} dataString
 * @return {Object}
 */
export const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return initialState;
  }
};

export const update = (parentElement, element) => {
  parentElement.innerHTML = ``;
  parentElement.appendChild(element);
};
