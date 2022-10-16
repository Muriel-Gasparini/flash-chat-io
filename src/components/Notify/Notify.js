import { toast } from 'react-toastify'

class Notify {
  static error(message = '') {
    const errorMessagePattern = /Error: /

    if (errorMessagePattern.test(message)) {
      message = message.replace(errorMessagePattern, '')
    }
    return toast.error(message, {});
  }

  static success(message) {
    return toast.success(message);
  }
}

export { Notify }
