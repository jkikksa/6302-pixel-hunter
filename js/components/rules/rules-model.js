class RulesModel {

  updateState(newState) {
    this.state = newState;
  }

  set name(name) {
    const newState = this.state.setName(this.state, name);
    this.updateState(newState);
  }
}

export default RulesModel;
