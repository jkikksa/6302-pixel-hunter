import intro from '../intro/intro';
import greeting from '../greeting/greeting';
// import rules from '../controllers/rules';
// import game from '../controllers/game';
// import stats from '../controllers/stats';

/**
 * Список экранов
 * @enum {Element}
 */
const LEVELS = {
  'intro': intro,
  'greeting': greeting,
  // 'rules': rules,
  // 'game': game,
  // 'stats': stats,
};

/**
 * Блок, в котором показываются экраны
 * @type {Element}
 */
const container = document.querySelector(`main.central`);

/**
 * Показывает необходимый экран
 * @param {Element} view Экран
 */
export default (view) => {
  container.innerHTML = ``;
  container.appendChild((LEVELS[view])().getElement());
};
