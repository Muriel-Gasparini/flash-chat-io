import { BaseService } from "./BaseService";

class SignUpService extends BaseService {

  baseUrl = 'http://localhost:3001/sign-up'

  async createAccount(account) {
    return await super.getHttpRequest().post(this.getBaseUrl(), account)
  }
}

export { SignUpService }
