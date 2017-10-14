import AbstractView from '../abstract-view';

class IntroView extends AbstractView {
  getTemplate() {
    return `\
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${this._footerTemplate}\
  `;
  }

  bind() {
    const intro = this.getElement();
    const nextButton = intro.querySelector(`.intro__asterisk`);

    nextButton.addEventListener(`click`, this.onNextButtonClick);
  }

  onNextButtonClick() {

  }
}

export default IntroView;
