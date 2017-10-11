import game from '../controllers/game';
import greeting from '../controllers/greeting';
import intro from '../controllers/intro';
import rules from '../controllers/rules';
import stats from '../controllers/stats';

/**
 * Список экранов
 * @enum {Element}
 */
const LEVELS = {
  'intro': intro,
  'greeting': greeting,
  'rules': rules,
  'game': game,
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
export default (view, state) => {
  clearView();
  container.appendChild((LEVELS[view])(state));
};
