export default (answers) => {

  const statsBarTemplate = answers.map((it) => {
    if (it.correctness === `correct`) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
  }).concat(new Array(10 - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`)).join(``);

  return `
    <ul class="stats">
      ${statsBarTemplate};
    </ul>
  `;
};
