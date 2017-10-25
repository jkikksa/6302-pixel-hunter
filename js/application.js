import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameOneScreen from './components/game/game-one-screen';
import gameTwoScreen from './components/game/game-two-screen';
import gameThreeScreen from './components/game/game-three-screen';
import statsScreen from './components/stats/stats-screen';
import {State as initialState} from './data/state';
import getQuestion from './data/get-question';
import getAnswer from './data/get-answer';


import testData from './test';

import Loader from './loader';

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question.id);

  return {question, answer};
};

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
    // location.hash = ControllerId.INTRO;
    newRoutes[`INTRO`].init();
  }

  static showGreeting(state = initialState) {
    newRoutes[`GREETING`].init(state);
    // location.hash = `${ControllerId.GREETING}?${saveState(state)}`;
  }

  static showRules(state) {
    newRoutes[`RULES`].init(state);
    // location.hash = `${ControllerId.RULES}?${saveState(state)}`;
  }

  static showGame(state, data) {
    switch (data.type) {
      case `two-of-two`:
        newRoutes[`GAME_ONE`].init(state, data.answers);
        break;
      case `tinder-like`:
        newRoutes[`GAME_TWO`].init(state, data.answers);
        break;
      case `one-of-three`:
        newRoutes[`GAME_THREE`].init(state, data.answers);
        break;
    }
  }

  static showStats(state) {
    location.hash = `${ControllerId.STATS}?${saveState(state)}`;
  }

  static showNextGame(state) {

    if (state.answers.length >= 10 || state.lives <= 0) {
      this.showStats(state);
    } else {
      this.showGame(state, this.data[0]);
    }
  }

  static async init() {
    this.showIntro();
    // this.data = await Loader.getData();
    this.data = testData;
    // console.log(this.data);
    // const imagesURL = getImagesURL(this.data);


    // for (const url of imagesURL) {
    //   await loadImage(url);
    // }
    this.showGreeting();
    this.start();

    // console.log(imagesURL);
  }
}

