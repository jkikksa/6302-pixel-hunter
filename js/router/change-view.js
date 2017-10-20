/**
 * Блок, в котором показываются экраны
 * @type {Element}
 */
const container = document.querySelector(`main.central`);

// /**
//  * Показывает необходимый экран
//  * @param {Element} view Экран
//  */
export default (view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};
