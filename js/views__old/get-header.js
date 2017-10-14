import getLives from './get-lives';

export default (state) => {
  return `
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">${state.timeLeft}</h1>
      ${getLives(state.lives)}
    </header>
  `;
};
