import GameOneView from './game-one-view';
import GameModel from './game-model';
import {changeView} from '../../utils';
import App from '../../application';

class GameOneScreen {
  constructor() {
    this.model = new GameModel();

    this.onBackButtonClicked = () => {
      this.model.stopTimer();
      App.showGreeting();
    };

    this.onTick = () => {
      this.view.updateHeader(this.model.timeLeft, this.model.lives);
    };

    this.onExpired = () => {
      this.model.addAnswer(false);
      this.model.decreaseLives();
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };

    this.onAnswer = (userAnswer) => {
      this.model.stopTimer();
      const {firstAnswer, secondAnswer} = userAnswer;
      const isFirstAnswerRight = firstAnswer.value === this.rightAnswer.question1;
      const isSecondAnswerRight = secondAnswer.value === this.rightAnswer.question2;
      this.model.addAnswer(isFirstAnswerRight && isSecondAnswerRight);
      if (!(isFirstAnswerRight && isSecondAnswerRight)) {
        this.model.decreaseLives();
      }
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };
  }

  init(state, question, rightAnswer) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.model.updateState(state);
    this.view = new GameOneView(this.question, this.onAnswer, this.model.answers, this.onBackButtonClicked);
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.model.startTimer(this.onTick, this.onExpired);
  }
}

export default new GameOneScreen();
