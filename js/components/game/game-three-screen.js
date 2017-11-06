import GameThreeView from './game-three-view';
import GameScreen from './game-screen';
import {changeView} from '../../utils';
import App from '../../application';

/**
 * @enum {string}
 */
const QuestionType = {
  PHOTO: `photo`,
  PAINT: `painting`
};

class GameThreeScreen extends GameScreen {
  constructor() {
    super();

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
    this.rightAnswers = data.answers.map((it) => it.type);
    this.questionType = data.question === `Найдите фото среди изображений` ? QuestionType.PHOTO : QuestionType.PAINT;
    this.model.updateState(state);
    this.view = new GameThreeView(data, this.onAnswer, this.model.answers, this.onBackButtonClicked);
    changeView(this.view);
    this.view.updateHeader(this.model.timeLeft, this.model.lives);
    this.model.startTimer(this.onTick, this.onExpired);
  }
}

export default new GameThreeScreen();
