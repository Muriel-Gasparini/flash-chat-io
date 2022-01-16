import { Manager } from 'socket.io-client'

class WebsocketManager {

  base_path = "ws://localhost:3001"

  constructor() {
    this.instance = new Manager(this.base_path);
  }

}

export { WebsocketManager }
