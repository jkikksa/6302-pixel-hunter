import getStatsBar from './get-stats-bar';

export default (data, state) => {
  return `
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option" data-option="question1">
          <img src="${data.question1}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected" data-option="question2">
          <img src="${data.question2}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option" data-option="question3">
          <img src="${data.question3}" alt="Option 3" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        ${getStatsBar(state.answers)}
      </div>
    </div>
  `;
};
