/**
 * Порядок экранов в приложении
 * @const
 * @type {Array<string>}
 */
const SCREENS_ORDER = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];

/**
 * Клавиатурные коды
 * @enum {number}
 */
const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

/**
 * Блок, в котором показываются экраны
 * @type {Element}
 */
const container = document.querySelector(`main.central`);

/**
 * Массив необходимых шаблонов
 * @type {Array}
 */
const templatesList = Array.from(document.querySelectorAll(`template`)).filter((it) => SCREENS_ORDER.includes(it.id));

/**
 * Карта соответствия имени экрана и элемента с таким именем
 * @type {Object<string, Element>}
 */
const templatesMap = templatesList.reduce((acc, it) => {
  acc[it.id] = it;
  return acc;
}, {});

/**
 * Индекс текущего экрана
 * @type {number}
 */
let currentScreenIndex = 0;

/**
 * Удаляет все экраны
 */
const removeScreen = () => {
  container.innerHTML = ``;
};

/**
 * Показывает необходимый экран
 * @param {number} index Индекс показываемого экрана
 */
const showScreen = (index) => {
  removeScreen();
  const template = templatesMap[SCREENS_ORDER[index]].content;
  const screen = template.cloneNode(true);
  container.appendChild(screen);
};

/**
 * Показывает предыдущий экран
 */
const showPrevScreen = () => {
  if (currentScreenIndex > 0) {
    showScreen(--currentScreenIndex);
  }
};

/**
 * Показывает следующий экран
 */
const showNextScreen = () => {
  if (currentScreenIndex < templatesList.length - 1) {
    showScreen(++currentScreenIndex);
  }
};

/**
 * Обработчик нажатия на клавишу клавиатуры
 * @param {KeyboardEvent} evt
 */
const onKeyPressed = (evt) => {
  if (!evt.altKey) {
    return;
  }

  switch (evt.keyCode) {
    case KeyCode.LEFT_ARROW:
      evt.preventDefault();
      showPrevScreen();
      break;
    case KeyCode.RIGHT_ARROW:
      evt.preventDefault();
      showNextScreen();
      break;
  }
};

/**
 * Показывает начальный экран
 */
showScreen(currentScreenIndex);

/**
 * Добавляет обработчик нажатий на клавишу
 */
document.addEventListener(`keydown`, onKeyPressed);
