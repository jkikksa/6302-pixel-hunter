import GameThreeView from './game-three-view';
import GameModel from './game-model';
import {changeView} from '../../utils';
import App from '../../application';
import settings from '../../data/settings';

class GameThreeScreen {
  constructor() {
    this.model = new GameModel();

    this.onBackButtonClicked = () => {
      // eslint-disable-next-line
      const isConfirm = confirm(`Вы потеряете всё прохождение игры! Согласны?`);
      if (isConfirm) {
        this.model.stopTimer();
        App.showGreeting();
      }
    };

    this.onTick = () => {
      this.view.updateTime(this.model.timeLeft);
      if (this.model.timeLeft <= settings.WARNING_TIME) {
        this.view.onSoonExpired();
      }
    };

    this.onExpired = () => {
      this.model.addAnswer(false);
      this.model.decreaseLives();
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };

    this.onAnswer = (userAnswer) => {
      this.model.stopTimer();
      const isOptionRight = this.rightAnswers[userAnswer.dataset.option] === this.questionType;
      this.model.addAnswer(isOptionRight);
      if (!isOptionRight) {
        this.model.decreaseLives();
      }
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };
  }

  init(state, data) {
    this.rightAnswers = data.answers.map((it) => {
      return it.type;
    });
    this.questionType = data.question === `Найдите фото среди изображений` ? `photo` : `painting`;
    this.model.updateState(state);
    this.view = new GameThreeView(data, this.onAnswer, this.model.answers, this.onBackButtonClicked);
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.model.startTimer(this.onTick, this.onExpired);
  }
}

export default new GameThreeScreen();
