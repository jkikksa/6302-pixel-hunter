const URL = `https://es.dump.academy/pixel-hunter/questions`;

class Loader {

  static getData() {
    return fetch(URL)
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
