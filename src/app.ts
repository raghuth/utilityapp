
import { AuthController } from './auth/auth'
import { MsgController } from './massage/msgcontroller'
import { Userbean } from './user-bin/user-bin'
export class App {

    constructor() {
        // this.msgTest()
        // this.authTest()
        // this.userTest()
        // this.beanTest()
        this.getEmails("test@gmail.com,test1@gmail.com");
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

    getEmails(emailsIds: string) {
        //     /[\s,]+/
        let emailList = emailsIds.split(/[;,]+/)
        console.log('emailList ::::: ', emailList)
    }
    userTest() {
        let auth = new AuthController()
        auth.registration('raghu', 'demo', 9686440121, 'raghavendrath21@gmail.com', 'tumkur,jayanagar west', 'tumkur', '4th main road', 'india')
    }
    beanTest() {
        let auth = new AuthController()
        let userbean = new Userbean()
        userbean.username = 'raghu'
        userbean.password = 'demo'
        userbean.mobileNumber = 9686440121
        userbean.emailId = 'raghaendrath21@gmail.com'
        userbean.address = 'tumkur,jayanagar west'
        userbean.city = 'tumkur'
        userbean.street = '4th main road'
        userbean.country = 'india'
        auth.registrationBean(userbean)
    }


}



new App();
