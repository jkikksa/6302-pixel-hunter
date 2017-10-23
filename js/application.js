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

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question.id);

  return {question, answer};
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

export default class Application {

  static init() {
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
    location.hash = ControllerId.INTRO;
  }

  static showGreeting(state = initialState) {
    location.hash = `${ControllerId.GREETING}?${saveState(state)}`;
  }

  static showRules(state) {
    location.hash = `${ControllerId.RULES}?${saveState(state)}`;
  }

  static showGame(state) {
    state.gameData = getData();
    switch (state.gameData.question.type) {
      case `typeOne`:
        location.hash = `${ControllerId.GAME_ONE}?${saveState(state)}`;
        break;
      case `typeTwo`:
        location.hash = `${ControllerId.GAME_TWO}?${saveState(state)}`;
        break;
      case `typeThree`:
        location.hash = `${ControllerId.GAME_THREE}?${saveState(state)}`;
        break;
    }
  }

  static showStats(state) {
    delete state.gameData;
    location.hash = `${ControllerId.STATS}?${saveState(state)}`;
  }

  static showNextGame(state) {
    if (state.answers.length >= 10 || state.lives <= 0) {
      this.showStats(state);
    } else {
      this.showGame(state);
    }
  }
}
