import onBackButtonClicked from './back-button-handler';
import statsTemplate from '../views/stats';
import state from '../models/state';

export default () => {
  const stats = statsTemplate(state);
  const backButton = stats.querySelector(`.back`);

  backButton.addEventListener(`click`, onBackButtonClicked);

  return stats;
};
