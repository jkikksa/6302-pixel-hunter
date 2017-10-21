import introScreen from './components/intro/intro-screen';
import greetingScreen from './components/greeting/greeting-screen';
import rulesScreen from './components/rules/rules-screen';
import gameOneScreen from './components/game/game-one-screen';
import gameTwoScreen from './components/game/game-two-screen';
import gameThreeScreen from './components/game/game-three-screen';
import statsScreen from './components/stats/stats-screen';
import initialState from './data/state';
import getQuestion from './data/get-question';
import getAnswer from './data/get-answer';


const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question.id);

  return {question, answer};
};

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
    const gameData = getData();
    console.log(gameData);
    switch (gameData.question.type) {
      case `typeOne`:
        gameOneScreen.init(state, gameData.question.data, gameData.answer.data);
        break;
      case `typeTwo`:
        gameTwoScreen.init(state, gameData.question.data, gameData.answer.data);
        break;
      case `typeThree`:
        gameThreeScreen.init(state, gameData.question.data, gameData.answer.data);
        break;
    }
  }

  static showStats(state) {
    statsScreen.init(state);
  }

  static showNextGame(state) {
    if (state.answers.length >= 10 || state.lives <= 0) {
      this.showStats(state);
    } else {
      this.showGame(state);
    }
  }
}
