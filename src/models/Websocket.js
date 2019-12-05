export default class Websocket {
  constructor() {
    this.server = new WebSocket('wss://echo.websocket.org');
  }
}
