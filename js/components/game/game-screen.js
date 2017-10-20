import GameView from './game-view';
import GameModel from './game-model';
import changeView from '../../router/change-view';
import App from '../../application';

class GameScreen {
  constructor() {
    this.model = new GameModel();

    this.onBackButtonClicked = () => {
      this.model.stopTimer();
      App.showGreeting();
    };

    this.view = new GameView(this.onBackButtonClicked);

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

      switch (this.question.type) {
        case `typeOne`:
          const rightAnswers = this.model.getAnswer(this.question.id);
          const {firstAnswer, secondAnswer} = userAnswer;
          const isFirstAnswerRight = firstAnswer.value === rightAnswers.data.question1;
          const isSecondAnswerRight = secondAnswer.value === rightAnswers.data.question2;
          this.model.addAnswer(isFirstAnswerRight && isSecondAnswerRight);
          if (!(isFirstAnswerRight && isSecondAnswerRight)) {
            this.model.decreaseLives();
          }
          this.model.resetTime();
          App.showNextGame(this.model.state);
          return;
        case `typeTwo`:
          const rightAnswer = this.model.getAnswer(this.question.id);
          const {answer} = userAnswer;
          const isAnswerRight = answer.value === rightAnswer.data.question1;
          this.model.addAnswer(isAnswerRight);
          if (!isAnswerRight) {
            this.model.decreaseLives();
          }
          this.model.resetTime();
          App.showNextGame(this.model.state);
          return;
        case `typeThree`:
          const rightOption = this.model.getAnswer(this.question.id);
          const {option} = userAnswer;
          const isOptionRight = rightOption.data[option.dataset.option] === `paint`;
          this.model.addAnswer(isOptionRight);
          if (!isOptionRight) {
            this.model.decreaseLives();
          }
          this.model.resetTime();
          App.showNextGame(this.model.state);
          return;
      }
    };
  }

  init(state) {
    console.log(state);
    this.model.updateState(state);
    this.question = this.model.getQuestion();
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.view.updateGame(this.question, this.onAnswer, this.model.answers);
    this.model.startTimer(this.onTick, this.onExpired);

    // this.tick();
  }



  // tick() {
  //   if (this.model.timeLeft <= 0) {

  //     this.model.addAnswer(false);
  //     this.model.decreaseLives();
  //     this.model.resetTime();
  //     App.showNextGame(this.model.state);
  //     return;
  //   }

  //   this.model.tick();
  //   this.view.updateHeader(this.model.timeLeft, this.model.lives);

  //   this.timer = setTimeout(() => this.tick(), 1000);
  // }

  // stopTimer() {
  //   clearTimeout(this.timer);
  // }
}

export default new GameScreen();
