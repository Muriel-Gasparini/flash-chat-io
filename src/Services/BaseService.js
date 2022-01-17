import { HttpService } from "./HttpService/HttpService"

class BaseService {

  getHttpRequest() {
    return new HttpService()
  }

  getBaseUrl() {
    if (!this.base_url) {
      throw new Error('Implement base_url in your Service Class')
    }
    return this.base_url
  }

}

export { BaseService }
