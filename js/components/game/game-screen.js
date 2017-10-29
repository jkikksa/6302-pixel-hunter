import GameModel from './game-model';
import Settings from '../../data/settings';
import App from '../../application';

class GameScreen {
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
      if (this.model.timeLeft <= Settings.WARNING_TIME) {
        this.view.onSoonExpired();
      }
    };

    this.onExpired = () => {
      this.model.addAnswer(false);
      this.model.decreaseLives();
      this.model.resetTime();
      App.showNextGame(this.model.state);
    };
  }
}

export default GameScreen;
