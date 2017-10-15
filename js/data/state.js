const map = {
  true: `correct`,
  false: `incorrect`
};

export class InitialState {
  constructor() {
    this.lives = 3;
    this.currentScreen = ``;
    this.timeLeft = 90;
    this.playerName = ``;
    this.answers = [];
  }

  setName(name) {
    this.playerName = name;
  }

  addAnswer(correctness, type) {
    this.answers.push({
      correctness: map[correctness],
      type
    });
  }

  decreaseLives() {
    this.lives--;
  }
}

export const state = new InitialState();
