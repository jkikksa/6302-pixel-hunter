import footer from './footer';
import getElement from './get-element';
import getHeader from './get-header';
import getTypeOne from './get-type-one';
import getTypeTwo from './get-type-two';
import getTypeThree from './get-type-three';

const TemplateType = {
  typeOne: getTypeOne,
  typeTwo: getTypeTwo,
  typeThree: getTypeThree
};

export default (state, questionType, questionData) => {
  const template = `
    ${getHeader(state)}
    ${TemplateType[questionType](questionData, state)}
    ${footer}
  `;
  return getElement(template);
};
