const emptyString = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
const fullString = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

export default (livesCount) => {
  return `
    <div class="game__lives">
      ${new Array(3 - livesCount).fill(emptyString).join(``)}
      ${new Array(livesCount).fill(fullString).join(``)}
    </div>
  `;
};
