class LocalStorage {

  static setItem(name, item) {
    localStorage.setItem(name, item)
  }

  static getItem(name) {
    return localStorage.getItem(name)
  }

  static removeItem(name) {
    localStorage.removeItem(name)
  }
}

export { LocalStorage }
