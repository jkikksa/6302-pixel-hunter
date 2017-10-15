import StatsView from './stats-view';
import onBackButtonClicked from '../handlers/back-button-handler';
import getScore from '../../data/get-score';
import {state} from '../../data/state';


export default () => {
  const score = getScore(state.answers, state.lives);
  const rules = new StatsView(onBackButtonClicked, score, state);

  return rules;
};
