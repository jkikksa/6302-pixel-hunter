import {createElement} from '../utils';

class AbstractView {
  get template() {
    return `empty`;
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }
}

export default AbstractView;
