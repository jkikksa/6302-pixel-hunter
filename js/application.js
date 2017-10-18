import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameScreen from './components/game/game-screen';

// import state from './data/state2';
// import newGameScreen from './screen/game-screen';
// import statsScreen from './screen/stats-screen';

export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showRules() {
    rulesScreen.init();
  }

  static showGame(state) {
    gameScreen.init(state);
  }

  static showNextGame(state) {
    gameScreen.init(state);
  }

  // static showStats(stats) {
  //   statsScreen.init(stats);
  // }
}
