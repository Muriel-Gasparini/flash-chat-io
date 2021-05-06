import { BaseService } from "./BaseService";

class SignInService extends BaseService {

  baseUrl = 'http://localhost:3001/sign-in'

  async login(credentials) {
    return await this.getHttpRequest().post(this.getBaseUrl(), credentials)
  }
}

export const makeSignService = () => {
  return new SignInService()
}

export { SignInService }
