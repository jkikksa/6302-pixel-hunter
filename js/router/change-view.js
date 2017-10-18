// import intro from '../components/intro/intro';
// import greeting from '../components/greeting/greeting';
// import rules from '../components/rules/rules';
// import game from '../components/game/game';
// import stats from '../components/stats/stats';

// /**
//  * Список экранов
//  * @enum {Element}
//  */
// const LEVELS = {
//   'intro': intro,
//   'greeting': greeting,
//   'rules': rules,
//   'game': game,
//   'stats': stats,
// };

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
