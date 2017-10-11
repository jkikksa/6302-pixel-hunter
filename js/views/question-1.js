import getHeader from './header';
import getTypeOne from './get-type-one';
import getTypeTwo from './get-type-one';
import getTypeThree from './get-type-one';
import footer from './footer';
import questions from '../models/questions';

const randomQuestion = questions[0];

const map = {
  typeOne: getTypeOne,
  typeTwo: getTypeTwo,
  typeThree: getTypeThree
};


export default (state) => {
  return {
    type: randomQuestion.type,
    questionId: randomQuestion.id,
    template: `
        ${getHeader(state)}
        ${map[randomQuestion.type](randomQuestion.data, state)}
        ${footer}
      `
  };
};
