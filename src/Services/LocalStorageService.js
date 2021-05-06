class LocalStorage {

  static setItem(name, item) {
    localStorage.setItem(name, item)
  }

  static getItem(name) {
    return localStorage.getItem(name)
  }
}

export { LocalStorage }
