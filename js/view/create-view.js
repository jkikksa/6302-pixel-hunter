/**
 * Создаёт из текстового шаблона DOM-элемент
 * @param {string} template
 * @return {Element}
 */
export default (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};
