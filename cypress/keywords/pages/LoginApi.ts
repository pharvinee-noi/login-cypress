import { getLoginBody } from "./constants"

let loginBody: any
let response: any
let status: any
let service_code: any
let service_message: any
let user_token: any
let code: any

class LoginApi{
    static getLoginUrl(){ 
        return Cypress.env("baseUrl")
    }

    static getLoginHeader(){
        return {
            "Content-Type": "application/json",
        }
    }

    static prepareRequest(){
      this.getTestData();
    }

    static getTestData(){
      cy.fixture('/TestData.json').then(data => {
        loginBody = data
      })
    }
    
    static Login = (body: any) => {
        const loginApi = LoginApi.getLoginUrl();
        return new Promise(resolve => {
          cy.request({
            method: "POST",
            url: loginApi,
            headers: LoginApi.getLoginHeader(),
            body: body,
          }).then(result => {
            return resolve(result)
          })
        })
    }

    static sendRequestLogin(body: string) {
      response = LoginApi.Login(loginBody.body);
    }

    static verifyResponse(){
      status = response.body.status
      service_code = response.body.service_code
      service_message = response.body.service_message
      user_token = response.body.user_token
      code = response.body.code
    }

}
export default LoginApi