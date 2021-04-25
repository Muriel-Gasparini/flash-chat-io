import { toast } from 'react-toastify'

class Notify {

  static error(message) {
    return toast.error(message);
  }

  static success(message) {
    return toast.success(message);
  }
}

export { Notify }
