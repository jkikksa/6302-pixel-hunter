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
const Route = {
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
    Route[`INTRO`].init();
  }

  static showGreeting(state = initialState) {
    Route[`GREETING`].init(state);
  }

  static showRules(state) {
    Route[`RULES`].init(state);
  }

  static showGame(state, data) {
    switch (data.type) {
      case `two-of-two`:
        Route[`GAME_ONE`].init(state, data);
        break;
      case `tinder-like`:
        Route[`GAME_TWO`].init(state, data);
        break;
      case `one-of-three`:
        Route[`GAME_THREE`].init(state, data);
        break;
    }
  }

  static showStats(state) {
    Route[`STATS`].init(state);
    location.hash = `stats?${saveState(state)}`;
  }

  static async showNextGame(state) {
    const currentIndex = state.answers.length;

    if (currentIndex >= 10 || state.lives < 0) {
      try {
        await APIService.sendStatistics(state.playerName.toLowerCase(), state);
      } catch (error) {
        // eslint-disable-next-line
        window.alert(`Произошла ошибка сохранения статистики!`);
      } finally {
        this.showStats(state);
      }
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
      try {
        await this._loadAllGameData();
      } catch (error) {
        // eslint-disable-next-line
        window.alert(`Произошла ошибка получения данных игры! Попробуйте еще раз позже`);
      }
    }
    this.showGreeting();
  }
}

export default Application;

