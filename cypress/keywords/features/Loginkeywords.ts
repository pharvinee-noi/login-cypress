import { given, when, then } from "cypress-cucumber-preprocessor/steps"
import LogingApi from '../pages/LoginApi'


given("Prepare data to request", () => {
    LogingApi.prepareRequest();
})

when('Send request to login', () => {
    LogingApi.sendRequestLogin('request_body');
})

when('Send request to login with all field is invalid', () => {
    LogingApi.sendRequestLogin('bad_request_body');
})

when('Send request to login for server down', () => {
    LogingApi.sendRequestLogin('service_down_request_body');
})

then("Verify data should be response success", () => {
    LogingApi.verifyResponse();
})

then("Verify data should be response bad request", () => {
    LogingApi.verifyResponse();
})

then("Verify data should be response server downs", () => {
    LogingApi.verifyResponse();
})
