import {setName} from '../../data/state';

class RulesModel {

  updateState(newState) {
    this.state = newState;
  }

  set name(name) {
    const newState = setName(this.state, name);
    this.updateState(newState);
  }
}

export default RulesModel;
