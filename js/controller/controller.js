import introView from '../view/views/intro';
import greatingView from '../view/views/greating';
import rulesView from '../view/views/rules';
import statsView from '../view/views/stats';
import game1View from '../view/views/game-1';
import game2View from '../view/views/game-2';
import game3View from '../view/views/game-3';

import Model from '../model/model';
const model = new Model();

class Controller {
  constructor() {
    /**
     * Индекс текущего экрана
     * @type {number}
     */
    this.currentScreenIndex = 0;
  }

  showStartScreen() {
    model.render(introView);
  }

  /**
   * Показывает предыдущий экран
   */
  showPrevScreen() {
    if (this.currentScreenIndex > 0) {
      model.render(VIEWS_ORDER[--this.currentScreenIndex]);
    }
  }

  /**
   * Показывает следующий экран
   */
  showNextScreen() {
    if (this.currentScreenIndex < VIEWS_ORDER.length - 1) {
      model.render(VIEWS_ORDER[++this.currentScreenIndex]);
    }
  }
}


/**
 * Порядок экранов в приложении
 * @const
 * @type {Array<string>}
 */
const VIEWS_ORDER = [introView, greatingView, rulesView, statsView, game1View, game2View, game3View];

/**
 * Клавиатурные коды
 * @enum {number}
 */
const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

export default Controller;

/**
//  * Обработчик нажатия на клавишу клавиатуры
//  * @param {KeyboardEvent} evt
//  */
// const onKeyPressed = (evt) => {
//   if (!evt.altKey) {
//     return;
//   }
//
//   switch (evt.keyCode) {
//     case KeyCode.LEFT_ARROW:
//       evt.preventDefault();
//       showPrevScreen();
//       break;
//     case KeyCode.RIGHT_ARROW:
//       evt.preventDefault();
//       showNextScreen();
//       break;
//   }
// };
//
// /**
//  * Показывает начальный экран
//  */
// renderView(VIEWS_ORDER[currentScreenIndex]);
//
// /**
//  * Добавляет обработчик нажатий на клавишу
//  */
// document.addEventListener(`keydown`, onKeyPressed);
