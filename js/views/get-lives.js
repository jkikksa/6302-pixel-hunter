export default (livesCount) => {
  switch (livesCount) {
    case 3:
      return `
        <div class="game__lives">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
        `;
    case 2:
      return `
        <div class="game__lives">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
        `;
    case 1:
      return `
        <div class="game__lives">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
        `;
    default:
      return `
        <div class="game__lives">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
        `;
  }
};
