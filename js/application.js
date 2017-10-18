import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameScreen from './components/game/game-screen';
import statsScreen from './components/stats/stats-screen';
import initialState from './data/state2';

export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting(state = initialState) {
    greetingScreen.init(state);
  }

  static showRules(state) {
    rulesScreen.init(state);
  }

  static showGame(state) {
    gameScreen.init(state);
  }

  static showStats(state) {
    statsScreen.init(state);
  }

  static showNextGame(state) {
    if (state.answers.length >= 10 || state.lives <= 0) {
      this.showStats(state);
    } else {
      gameScreen.init(state);
    }
  }

  // static showStats(stats) {
  //   statsScreen.init(stats);
  // }
}
