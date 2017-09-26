const screensOrder = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};
const container = document.querySelector(`main.central`);
const templateList = [...document.querySelectorAll(`template`)];

// карта соответствия имени экрана и элемента с таким id
const nameToTemplate = templateList.reduce((acc, it) => {
  acc[it.id] = it;
  return acc;
}, {});

let currentScreenIndex = 0;

const removeScreen = () => {
  container.innerHTML = ``;
};

const showScreen = (index) => {
  removeScreen();
  const template = nameToTemplate[screensOrder[index]].content;
  const screen = template.cloneNode(true);
  container.appendChild(screen);
};

// показывает первый экран приложения
showScreen(currentScreenIndex);

const showPrevScreen = () => {
  if (currentScreenIndex > 0) {
    showScreen(--currentScreenIndex);
  }
};

const showNextScreen = () => {
  if (currentScreenIndex < templateList.length - 1) {
    showScreen(++currentScreenIndex);
  }
};

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

document.addEventListener(`keydown`, onKeyPressed);
