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
  INTRO: introScreen,
  GREETING: greetingScreen,
  RULES: rulesScreen,
  GAME_ONE: gameOneScreen,
  GAME_TWO: gameTwoScreen,
  GAME_THREE: gameThreeScreen,
  STATS: statsScreen
};

export default class Application {

  static showIntro() {
    routes[`INTRO`].init();
  }

  static showGreeting(state = initialState) {
    routes[`GREETING`].init(state);
  }

  static showRules(state) {
    routes[`RULES`].init(state);
  }

  static showGame(state, data) {
    switch (data.type) {
      case `two-of-two`:
        routes[`GAME_ONE`].init(state, data);
        break;
      case `tinder-like`:
        routes[`GAME_TWO`].init(state, data);
        break;
      case `one-of-three`:
        routes[`GAME_THREE`].init(state, data);
        break;
    }
  }

  static showStats(state) {
    routes[`STATS`].init(state);
    location.hash = `stats?${saveState(state)}`;
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
    const hashValue = location.hash.replace(`#`, ``);
    if (hashValue !== ``) {
      const [, hashData] = hashValue.split(`?`);
      this.showStats(loadState(hashData));
      return;
    }
    this.showIntro();
    this.data = await Loader.getData();

    const imagesURL = getImagesURL(this.data);

    await Promise.all(imagesURL.map((it) => loadImage(it)));

    this.showGreeting();
  }
}

