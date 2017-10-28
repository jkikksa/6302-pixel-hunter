/** Список URL REST API
 * @enum {string}
 */
const URL = {
  DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats/`
};

class Loader {

  /** Получает данные игры с сервера
   * @return {Promise}
   */
  static getData() {
    return fetch(URL.DATA)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Ошибка! ${response.status}`);
          }
        });
  }

  /**
   * Отправляет статистику на сервер
   * @param {string} username Имя пользователя
   * @param {Object} data Объект со статистикой игры
   * @return {Promise}
   */
  static sendStatistics(username, data) {
    return fetch(`${URL.STATISTICS}${username}`, {
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
  static loadStatistics(username) {
    return fetch(`${URL.STATISTICS}${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Ошибка! ${response.status}`);
          }
        });
  }
}

export default Loader;
