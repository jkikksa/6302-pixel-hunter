import {createElement} from '../utils';

class AbstractView {
  get template() {
    return `empty`;
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}

export default AbstractView;
