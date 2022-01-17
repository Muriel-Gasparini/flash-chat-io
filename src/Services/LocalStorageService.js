class LocalStorage {

  static setItem(name, item) {
    localStorage.setItem(name, item)
  }
  
  static setJSONItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
  }

  static getJSONItem(name) {
    return JSON.parse(localStorage.getItem(name))
  }

  static getItem(name) {
    return localStorage.getItem(name)
  }

  static removeItem(name) {
    localStorage.removeItem(name)
  }
}

export { LocalStorage }
