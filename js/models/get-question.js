const QUESTIONS = [
  {
    id: 0,
    type: `typeOne`,
    data: {
      question1: `https://k42.kn3.net/CF42609C8.jpg`,
      question2: `http://i.imgur.com/1KegWPz.jpg`
    }
  },
  {
    id: 1,
    type: `typeTwo`,
    data: {
      question1: `https://k42.kn3.net/D2F0370D6.jpg`
    }
  },
  {
    id: 2,
    type: `typeThree`,
    data: {
      question1: `https://i.imgur.com/DiHM5Zb.jpg`,
      question2: `http://i.imgur.com/DKR1HtB.jpg`,
      question3: `https://k32.kn3.net/5C7060EC5.jpg`
    }
  }
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElement = () => {
  return QUESTIONS[getRandomInt(0, QUESTIONS.length)];
};

export default () => {
  return getRandomElement();
};
