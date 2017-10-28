import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameOneScreen from './components/game/game-one-screen';
import gameTwoScreen from './components/game/game-two-screen';
import gameThreeScreen from './components/game/game-three-screen';
import statsScreen from './components/stats/stats-screen';
import {State as initialState} from './data/state';
import Loader from './loader';

/**
 * Преобразует данные игры в массив ссылок на изображения
 * @param {Array.<Object>} data Данные игры, загруженные с сервера
 * @return {Array.<string>}
 */
const getImagesURL = (data) => {
  return data.reduce((acc, it) => {
    return acc.concat(it.answers.map((answer) => answer.image.url));
  }, []);
};

/**
 * Загружает изображение
 * @param {string} url Ссылка на изображение
 * @return {Promise}
 */
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

/**
 * Преобразует State в строку
 * @param {Object} state
 * @return {string}
 */
const saveState = (state) => {
  return JSON.stringify(state);
};

/**
 * Парсит строку в State
 * @param {string} dataString
 * @return {Object}
 */
const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return initialState;
  }
};

/**
 * @enum {Class}
 */
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

  static async showNextGame(state) {
    const currentIndex = state.answers.length;

    if (currentIndex >= 10 || state.lives < 0) {
      await Loader.sendStatistics(state.playerName.toLowerCase(), state);
      this.showStats(state);
    } else {
      this.showGame(state, this.data[currentIndex]);
    }
  }

  static async _loadAllGameData() {
    this.data = await Loader.getData();
    const imagesURL = getImagesURL(this.data);
    await Promise.all(imagesURL.map((it) => loadImage(it)));
  }

  static init() {
    const hashValue = location.hash.replace(`#`, ``);
    if (hashValue !== ``) {
      const [, hashData] = hashValue.split(`?`);
      this.showStats(loadState(hashData));
      return;
    }
    this.startGame();
  }

  static async startGame() {
    if (typeof this.data === `undefined`) {
      this.showIntro();
      await this._loadAllGameData();
    }
    this.showGreeting();
  }
}

