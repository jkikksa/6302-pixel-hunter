import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameOneScreen from './components/game/game-one-screen';
import gameTwoScreen from './components/game/game-two-screen';
import gameThreeScreen from './components/game/game-three-screen';
import statsScreen from './components/stats/stats-screen';
import {State as initialState} from './data/state';

import Loader from './loader';

const getImagesURL = (data) => {
  return data.reduce((acc, it) => {
    return acc.concat(it.answers.map((answer) => answer.image.url));
  }, []);
};

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener(`load`, () => {
      return resolve(img);
    });
    img.addEventListener(`error`, () => {
      return reject(`Ошибка загрузки`);
    });
    img.src = url;
  });
};

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME_ONE: `gameOne`,
  GAME_TWO: `gameTwo`,
  GAME_THREE: `gameThree`,
  STATS: `stats`
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {

  try {
    return JSON.parse(dataString);
  } catch (e) {
    return initialState;
  }
};

const routes = {
  [ControllerId.INTRO]: introScreen,
  [ControllerId.GREETING]: greetingScreen,
  [ControllerId.RULES]: rulesScreen,
  [ControllerId.GAME_ONE]: gameOneScreen,
  [ControllerId.GAME_TWO]: gameTwoScreen,
  [ControllerId.GAME_THREE]: gameThreeScreen,
  [ControllerId.STATS]: statsScreen
};

const newRoutes = {
  INTRO: introScreen,
  GREETING: greetingScreen,
  RULES: rulesScreen,
  GAME_ONE: gameOneScreen,
  GAME_TWO: gameTwoScreen,
  GAME_THREE: gameThreeScreen,
  STATS: statsScreen
};

export default class Application {

  static start() {
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, onHashChange);
    onHashChange();
  }

  static changeHash(id, data) {
    const controller = routes[id];

    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showIntro() {
    newRoutes[`INTRO`].init();
  }

  static showGreeting(state = initialState) {
    newRoutes[`GREETING`].init(state);
  }

  static showRules(state) {
    newRoutes[`RULES`].init(state);
  }

  static showGame(state, data) {
    switch (data.type) {
      case `two-of-two`:
        newRoutes[`GAME_ONE`].init(state, data);
        break;
      case `tinder-like`:
        newRoutes[`GAME_TWO`].init(state, data);
        break;
      case `one-of-three`:
        newRoutes[`GAME_THREE`].init(state, data);
        break;
    }
  }

  static showStats(state) {
    location.hash = `${ControllerId.STATS}?${saveState(state)}`;
  }

  static showNextGame(state) {
    const currentIndex = state.answers.length;

    if (currentIndex >= 10 || state.lives <= 0) {
      this.showStats(state);
    } else {
      this.showGame(state, this.data[currentIndex]);
    }
  }

  static async init() {
    this.showIntro();
    const hashValue = location.hash.replace(`#`, ``);
    const [, data] = hashValue.split(`?`);
    console.log(data);
    this.data = await Loader.getData();

    const imagesURL = getImagesURL(this.data);

    await Promise.all(imagesURL.map((it) => loadImage(it)));

    // for (const url of imagesURL) {
    //   await loadImage(url);
    // }
    this.showGreeting();
    this.start();
  }
}

