import RulesView from './rules-view';
import RulesModel from './rules-model';
import changeView from '../../router/change-view';
import App from '../../application';

class RulesScreen {
  constructor() {
    this.model = new RulesModel();
    this.view = new RulesView();
  }

  init(state) {
    changeView(this.view);
    this.model.updateState(state);

    this.view.onBackButtonClicked = () => {
      App.showGreeting();
    };

    this.view.onNameFieldInput = (nameField, submitButton) => {
      if (nameField.value.length !== 0) {
        submitButton.disabled = false;
      }
    };

    this.view.onFormSubmit = (evt, nameField) => {
      evt.preventDefault();
      this.model.name = nameField.value;
      App.showGame(this.model.state);
    };
  }
}

export default new RulesScreen();
