import { APIRequest, APIRequestContext } from "@playwright/test";
import Users from "../models/User";
export default class UserApi {
    async signup(request: APIRequestContext,user: Users){
        return await request.post('/api/v1/users/register', {
            data: {
                email: user.getEmail(),
                password: user.getPassword(),
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
            },
        });
    }


}