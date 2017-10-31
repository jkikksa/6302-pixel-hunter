import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameOneScreen from './components/game/game-one-screen';
import gameTwoScreen from './components/game/game-two-screen';
import gameThreeScreen from './components/game/game-three-screen';
import statsScreen from './components/stats/stats-screen';
import {State as initialState} from './data/state';
import APIService from './api-service';
import {saveState, loadState} from './utils';

/**
 * @enum {Class}
 */
const Routes = {
  INTRO: introScreen,
  GREETING: greetingScreen,
  RULES: rulesScreen,
  GAME_ONE: gameOneScreen,
  GAME_TWO: gameTwoScreen,
  GAME_THREE: gameThreeScreen,
  STATS: statsScreen
};

class Application {

  static showIntro() {
    Routes[`INTRO`].init();
  }

  static showGreeting(state = initialState) {
    Routes[`GREETING`].init(state);
  }

  static showRules(state) {
    Routes[`RULES`].init(state);
  }

  static showGame(state, data) {
    switch (data.type) {
      case `two-of-two`:
        Routes[`GAME_ONE`].init(state, data);
        break;
      case `tinder-like`:
        Routes[`GAME_TWO`].init(state, data);
        break;
      case `one-of-three`:
        Routes[`GAME_THREE`].init(state, data);
        break;
    }
  }

  static showStats(state) {
    Routes[`STATS`].init(state);
    location.hash = `stats?${saveState(state)}`;
  }

  static async showNextGame(state) {
    const currentIndex = state.answers.length;

    if (currentIndex >= 10 || state.lives < 0) {
      await APIService.sendStatistics(state.playerName.toLowerCase(), state);
      this.showStats(state);
    } else {
      this.showGame(state, this.data[currentIndex]);
    }
  }

  static async _loadAllGameData() {
    this.data = await APIService.getData();
    const imagesURL = APIService.getImagesURL(this.data);
    await Promise.all(imagesURL.map((it) => APIService.loadImage(it)));
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

export default Application;

