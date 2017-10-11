import onBackButtonClicked from './back-button-handler';
import statsTemplate from '../views/stats';

export default (state) => {
  const stats = statsTemplate(state);
  const backButton = stats.querySelector(`.back`);

  backButton.addEventListener(`click`, onBackButtonClicked);

  return stats;
};
