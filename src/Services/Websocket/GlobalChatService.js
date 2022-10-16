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
    retrieveMessages: 'retrieve_messages',
    send: 'send',
    newMessage: 'new_message'
  }

  sendMessage(message) {
    this.socket.emit(this.channels.send, message)
  }

  onRetrieveMessages(callback) {
    this.socket.on(this.channels.retrieveMessages, callback)
  }

  onMessage(callback) {
    this.socket.on(this.channels.newMessage, callback)
  }

  removeOnMessageListerners() {
    this.socket.removeAllListeners(this.channels.newMessage)
  }
}

export { WebsocketGlobalChat }
