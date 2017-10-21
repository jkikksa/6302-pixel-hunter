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
