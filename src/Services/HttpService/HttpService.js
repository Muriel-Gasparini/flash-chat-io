import axios from 'axios'

class HttpService {

  async makeRequest(url, method, body = null) {
    try {
      const response = await axios[method](url, body)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Verifique os dados enviados')
    }
  }

  async post(url, body) {
    return await this.makeRequest(url, 'post', body)
  }
}

export { HttpService }
