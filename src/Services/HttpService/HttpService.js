import axios from 'axios'

class HttpService {

  base_path = 'http://localhost:3000'

  async makeRequest(url, method, body = null, config) {
    try {
      const response = await axios[method](url, body, config)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Verifique os dados enviados')
    }
  }

  post(url, body, config) {
    return this.makeRequest(`${this.base_path}${url}`, 'post', body, config)
  }
  
  put(url, body, config) {
    return this.makeRequest(`${this.base_path}${url}`, 'put', body , config)
  }

  delete(url, config) {
    return this.makeRequest(`${this.base_path}${url}`, 'delete', null , config)
  }
  
  get(url, config) {
    return this.makeRequest(`${this.base_path}${url}`, 'get', null , config)
  }
}

export { HttpService }
