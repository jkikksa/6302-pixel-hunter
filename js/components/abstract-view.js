import {createElement} from '../utils';

class AbstractView {
  getTemplate() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return createElement(this.getTemplate());
  }

  bind() {

  }

  getElement() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}

export default AbstractView;
