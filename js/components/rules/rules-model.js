import state from '../../data/state2';

class RulesModel {
  constructor() {
    this.state = state;
  }

  updateState(newState) {
    this.state = newState;
  }

  set name(name) {
    const newState = this.state.setName(this.state, name);
    this.updateState(newState);
  }
}

export default RulesModel;
