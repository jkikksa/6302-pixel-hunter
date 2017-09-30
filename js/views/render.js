/**
 * Блок, в котором показываются экраны
 * @type {Element}
 */
const container = document.querySelector(`main.central`);

/**
 * Очищает экран приложения
 */
const clearView = () => {
  container.innerHTML = ``;
};

/**
 * Показывает необходимый экран
 * @param {Element} view Экран
 */
export default (view) => {
  clearView();
  container.appendChild(view);
};
