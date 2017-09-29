class View {
  constructor() {
    /**
     * Блок, в котором показываются экраны
     * @type {Element}
     */
    this._container = document.querySelector(`main.central`);
  }

  /**
   * Удаляет все экраны
   */
  remove() {
    this._container.innerHTML = ``;
  }

  /**
   * Показывает необходимый экран
   * @param {index} view Индекс показываемого экрана
   */
  render(view) {
    this.removeScreen();
    this._container.appendChild(view);
  }
}

export default View;
