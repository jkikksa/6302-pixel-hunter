import StatsView from './stats-view';
import onBackButtonClicked from '../handlers/back-button-handler';
import getScore from '../../data/get-score';
// import {state} from '../../data/state';


export default (state) => {
  const score = getScore(state.answers, state.lives);
  const stats = new StatsView(onBackButtonClicked, score, state);

  return stats;
};
