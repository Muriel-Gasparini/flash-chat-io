import { BaseService } from "./BaseService";

class SignInService extends BaseService {

  base_url = '/sign-in'

  static ACCESS_TOKEN_KEY = "USER_TOKEN"
  
  static USER_DATA_KEY = "USER_DATA"

  login(credentials) {
    return this.getHttpRequest().post(this.getBaseUrl(), credentials)
  }

  getUserInformation() {
    return this.getHttpRequest().get('/me')
  }
}

export const makeSignService = () => {
  return new SignInService()
}

export { SignInService }
