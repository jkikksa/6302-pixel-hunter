import {setName} from '../../data/state';

class RulesModel {
  set name(name) {
    const newState = setName(this.state, name);
    this.updateState(newState);
  }

  updateState(newState) {
    this.state = newState;
  }
}

export default RulesModel;
