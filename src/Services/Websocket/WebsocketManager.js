import { Manager } from 'socket.io-client'

class WebsocketManager {

  base_path = "ws://localhost:3000"

  constructor() {
    this.instance = new Manager(this.base_path);
  }

}

export { WebsocketManager }
