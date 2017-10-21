import GameTwoView from './game-two-view';
import GameModel from './game-model';
import {changeView} from '../../utils';
import App from '../../application';

class GameTwoScreen {
  constructor() {
    this.model = new GameModel();

    this.onBackButtonClicked = () => {
      this.model.stopTimer();
      App.showGreeting();
    };

    this.onTick = (time) => {
      console.log(time);
      this.view.updateHeader(time, this.model.lives);
    };

    this.onExpired = () => {
      console.log('expd');
      this.model.addAnswer(false);
      this.model.decreaseLives();
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };

    this.onAnswer = (userAnswer) => {
      this.model.stopTimer();

      const isAnswerRight = userAnswer.value === this.rightAnswer.question1;
      this.model.addAnswer(isAnswerRight);
      if (!isAnswerRight) {
        this.model.decreaseLives();
      }
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };
  }

  init(state, question, rightAnswer) {
    console.log(state);
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.model.updateState(state);
    this.view = new GameTwoView(this.question, this.onAnswer, this.model.answers, this.onBackButtonClicked);
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.model.startTimer(this.onTick, this.onExpired);
  }
}

export default new GameTwoScreen();
