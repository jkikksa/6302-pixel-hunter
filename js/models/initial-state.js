const map = {
  true: `correct`,
  false: `incorrect`
};

class InitialState {
  constructor() {
    this.lives = 3;
    this.currentScreen = ``;
    this.timeLeft = 90;
    this.playerName = ``;
    this.answers = [];
  }

  setAnswer(correctness, type) {
    this.answers.push({
      correctness: map[correctness],
      type
    });
  }

  decreaseLive() {
    this.lives--;
  }
}

export default InitialState;
