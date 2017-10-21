import getScore from '../../data/get-score';

class StatsModel {

  updateState(newState) {
    this.state = newState;
  }

  get answers() {
    return this.state.answers;
  }

  get lives() {
    return this.state.lives;
  }

  get score() {
    return getScore(this.answers, this.lives);
  }
}

export default StatsModel;
