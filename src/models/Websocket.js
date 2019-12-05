export default class Websocket {

  constructor() {
    this.socket = new WebSocket("wss://echo.websocket.org");
    this.socket.onclose = this.onClose;
    this.socket.onmessage = this.onMessage;
    this.socket.onerror = this.onError;
  }

  onClose(event) {
    if (event.wasClean) {
      // eslint-disable-next-line
      console.log('Соединение закрыто чисто');
    } else {
      // eslint-disable-next-line
      console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    // eslint-disable-next-line
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
  }

  onMessage(event) {
    // eslint-disable-next-line
    console.log("Получены данные " + event.data);
  }

  onError(error) {
    // eslint-disable-next-line
    console.log("Ошибка " + error.message);
  }

  onOpen() {
    this.socket.send('test')
  }

}

