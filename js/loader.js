const URL = {
  DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats/`
};

class Loader {

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

  static sendStatistics(username, data) {
    return fetch(`${URL.STATISTICS}${username}`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(data)
    });
  }

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
