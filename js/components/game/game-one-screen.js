import GameOneView from './game-one-view';
import GameScreen from './game-screen';
import {changeView} from '../../utils';
import App from '../../application';

class GameOneScreen extends GameScreen {
  constructor() {
    super();

    this.onAnswer = (userAnswer) => {
      this.model.stopTimer();
      const {firstAnswer, secondAnswer} = userAnswer;
      const isFirstAnswerRight = firstAnswer.value === this.firstRightAnswer;
      const isSecondAnswerRight = secondAnswer.value === this.secondRightAnswer;
      this.model.addAnswer(isFirstAnswerRight && isSecondAnswerRight);
      if (!(isFirstAnswerRight && isSecondAnswerRight)) {
        this.model.decreaseLives();
      }
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };
  }

  init(state, data) {
    [{type: this.firstRightAnswer, image: this.imageOne}, {type: this.secondRightAnswer, image: this.imageTwo}] = data.answers;

    this.model.updateState(state);
    this.view = new GameOneView(this.imageOne, this.imageTwo, this.onAnswer, this.model.answers, this.onBackButtonClicked);
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.model.startTimer(this.onTick, this.onExpired);
  }
}

export default new GameOneScreen();
