import Timer from '../../data/timer';

class GameModel {

  get timeLeft() {
    return this.state.timeLeft;
  }

  get answers() {
    return this.state.answers;
  }

  get lives() {
    return this.state.lives;
  }

  updateState(newState) {
    this.state = newState;
  }

  addAnswer(correctness) {
    const newState = this.state.addAnswer(this.state, `${correctness}`);
    this.updateState(newState);
  }

  updateTime(newTime) {
    const newState = this.state.setTime(this.state, newTime);
    this.updateState(newState);
  }

  resetTime() {
    const newState = this.state.resetTime(this.state);
    this.updateState(newState);
  }

  startTimer(onTick, onExpired) {
    this.timer = new Timer(this.timeLeft);
    this.timer.start((time) => {
      this.updateTime(time);
      onTick();
    }, onExpired);
  }

  stopTimer() {
    this.timer.stop();
  }

  decreaseLives() {
    const newState = this.state.setLives(this.state, --this.state.lives);
    this.updateState(newState);
  }


}

export default GameModel;
