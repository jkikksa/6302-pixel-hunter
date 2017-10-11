import question1 from '../controllers/question-1';
// import question2 from '../controllers/question-2';
// import question3 from '../controllers/question-3';
// import question4 from '../controllers/question-4';
// import question5 from '../controllers/question-5';
// import question6 from '../controllers/question-6';
// import question7 from '../controllers/question-7';
// import question8 from '../controllers/question-8';
// import question9 from '../controllers/question-9';
// import question10 from '../controllers/question-10';

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
  'question1': question1,
  // 'question2': question2,
  // 'question3': question3,
  // 'question4': question4,
  // 'question5': question5,
  // 'question6': question6,
  // 'question7': question7,
  // 'question8': question8,
  // 'question9': question9,
  // 'question10': question10,
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
