import gameOne from '../controllers/game-1';
import gameThree from '../controllers/game-3';
import gameTwo from '../controllers/game-2';
import greeting from '../controllers/greeting';
import intro from '../controllers/intro';
import rules from '../controllers/rules';
import stats from '../controllers/stats';

/**
 * Список экранов
 * @enum {Element}
 */
const STATES = {
  'gameOne': gameOne,
  'gameThree': gameThree,
  'gameTwo': gameTwo,
  'greeting': greeting,
  'intro': intro,
  'rules': rules,
  'stats': stats,
};

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
  container.appendChild(STATES[view]);
};
