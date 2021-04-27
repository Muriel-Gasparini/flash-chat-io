import axios from 'axios'

class HttpService {

  makeRequest(url, method, body = null) {
    return new Promise((resolve, reject) => {
      axios[method](url, body)
        .then(response => {
          console.log("RESPONSE", response)
          resolve(response.data)
        }, error => {
          console.log('ERROR', error)
          reject(new Error(error.response.data?.error || 'Verifique os dados enviados'))
        })
    })
  }

  async post(url, body) {
    return await this.makeRequest(url, 'post', body)
  }
}

export { HttpService }
