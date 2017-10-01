import getElement from './get-element';
import onBackButtonClicked from './back-button-handler';
import statsTemplate from '../views/stats';

const stats = getElement(statsTemplate);
const backButton = stats.querySelector(`.back`);

backButton.addEventListener(`click`, onBackButtonClicked);

export default stats;
