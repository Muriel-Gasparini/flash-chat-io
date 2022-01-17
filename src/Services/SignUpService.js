import { BaseService } from "./BaseService";

class SignUpService extends BaseService {

  base_url = '/sign-up'

  async createAccount(account) {
    return await super.getHttpRequest().post(this.getBaseUrl(), account)
  }
}

export { SignUpService }
