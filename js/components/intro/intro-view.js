import AbstractView from '../abstract-view';
import footer from '../footer/footer-view';

class IntroView extends AbstractView {

  get template() {
    return `\
<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
${footer.template}`;
  }

  bind() {
    const intro = this.element;
    const nextButton = intro.querySelector(`.intro__asterisk`);

    nextButton.addEventListener(`click`, () => {
      this.onNextButtonClick();
    });
  }

  onNextButtonClick() {

  }
}

export default IntroView;
