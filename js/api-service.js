/** Список URL REST API
 * @enum {string}
 */
const Url = {
  DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats/`
};

class APIService {

  /** Получает данные игры с сервера
   * @return {Promise}
   */
  static async getData() {
    const response = await fetch(Url.DATA);
    return response.json();
  }

  /**
   * Отправляет статистику на сервер
   * @param {string} username Имя пользователя
   * @param {Object} data Объект со статистикой игры
   * @return {Promise}
   */
  static async sendStatistics(username, data) {
    return fetch(`${Url.STATISTICS}${username}`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(data)
    });
  }

  /**
   * Загружает статистику с сервера
   * @param {string} username Имя пользователя
   * @return {Promise}
   */
  static async loadStatistics(username) {
    const response = await fetch(`${Url.STATISTICS}${username}`);
    return response.json();
  }

  /**
 * Преобразует данные игры в массив ссылок на изображения
 * @param {Array.<Object>} data Данные игры, загруженные с сервера
 * @return {Array.<string>}
 */
  static getImagesURL(data) {
    return data.reduce((acc, it) => {
      return acc.concat(it.answers.map((answer) => answer.image.url));
    }, []);
  }

  /**
 * Загружает изображение
 * @param {string} url Ссылка на изображение
 * @return {Promise}
 */
  static async loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener(`load`, () => {
        return resolve(img);
      });
      img.addEventListener(`error`, () => {
        return reject(`Ошибка загрузки`);
      });
      img.src = url;
    });
  }
}

export default APIService;
