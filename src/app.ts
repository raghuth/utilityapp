
import { User } from './user/user';
import { AuthController } from './auth/auth'
import { MsgController } from './massage/msgcontroller'
export class App {

    constructor() {
        this.msgTest()
        this.authTest()
    }

    msgTest() {
        let msgcontroller = new MsgController()
        msgcontroller.hello('raghu')
    }

    authTest() {
        let auth = new AuthController()
        auth.login('raghu', '1234')
        auth.logout('raghu')
    }

}



new App();
