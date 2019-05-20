import { User } from '../user/user'
import { Userbean } from '../user-bin/user-bin'
export class AuthController {
  user: User = new User()
  login(username: string, password: string) {
    console.log("login  username :", username)
    console.log("loging password :", password)
  }

  logout(username: string) {
    console.log("logout username :", username)
  }
  registration(username: string, password: string, mobileNumber: number, emailId: string, address: string, city: string, street: string, country: string) {
    console.log("newUsername :", username)
    console.log("newuserPassword :", password)
    console.log("mobileNumber :", mobileNumber)
    console.log("newUseremailid :", emailId)
    console.log("address :", address)
    console.log("city :", city)
    console.log("street :", street)
    console.log("country :", country)
  }
  registrationBean(userbean: Userbean) {
    console.log("newUsername :", userbean.username)
    console.log("newuserPassword :", userbean.password)
    console.log("mobileNumber :", userbean.mobileNumber)
    console.log("newUseremailid :", userbean.emailId)
    console.log("address :", userbean.address)
    console.log("city :", userbean.city)
    console.log("street :", userbean.street)
    console.log("country :", userbean.country)
  }
}


