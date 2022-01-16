import { LocalStorage } from '../LocalStorageService'
import { SignInService } from '../SignInService'
import { WebsocketManager } from './WebsocketManager'

class WebsocketGlobalChat extends WebsocketManager {
  constructor() {
    super()
    this.socket = this.instance.socket('/chat/global', {
      auth: {
        token: LocalStorage.getItem(SignInService.ACCESS_TOKEN_KEY)
      }
    })
  }

  channels = {
    chat: 'chat'
  }

  sendMessage(message) {
    this.socket.emit(this.channels.chat, message)
  }

  onMessage(callback) {
    this.socket.on(this.channels.chat, callback)
  }
}

export { WebsocketGlobalChat }
