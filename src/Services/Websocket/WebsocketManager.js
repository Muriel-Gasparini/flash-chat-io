import { Manager } from 'socket.io-client'

class WebsocketManager {

  base_path = process.env.WEBSOCKET_URL || "wss://66cb-45-235-53-71.ngrok.io"

  constructor() {
    this.instance = new Manager(this.base_path);
  }

}

export { WebsocketManager }
