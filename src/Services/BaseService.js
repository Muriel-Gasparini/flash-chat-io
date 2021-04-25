import { HttpService } from "./HttpService/HttpService"

class BaseService {

  getHttpRequest() {
    return new HttpService()
  }

  getBaseUrl() {
    if (!this.baseUrl) {
      throw new Error('Implement baseUrl in your Service Class')
    }
    return this.baseUrl
  }

}

export { BaseService }
