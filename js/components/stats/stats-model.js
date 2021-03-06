import getScore from '../../data/get-score';

class StatsModel {
  constructor() {
    this.getScore = getScore;
  }

  get playerName() {
    return this.state.playerName;
  }

  set gameStatistics(data) {
    const isDataValid = data.every((it) => {
      return it.hasOwnProperty(`lives`)
          && it.hasOwnProperty(`answers`)
          && it.hasOwnProperty(`playerName`)
          && it.hasOwnProperty(`timeLeft`);
    });
    if (isDataValid) {
      this._statistics = data;
    } else {
      this.setDefaultStatistics();
    }
  }

  get gameStatistics() {
    return this._statistics.reduceRight((acc, it) => {
      acc.push({
        score: this.getScore(it.answers, it.lives),
        answers: it.answers
      });
      return acc;
    }, []);
  }

  updateState(newState) {
    this.state = newState;
  }

  setDefaultStatistics() {
    this._statistics = [{
      lives: this.state.lives,
      answers: this.state.answers
    }];
  }
}

export default StatsModel;
