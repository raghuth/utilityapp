import { User } from '../user/user'

export class AuthController {
  user: User = new User()
  login(username: string, password: string) {
    console.log("login  username :", username)
    console.log("loging password :", password)
  }

  logout(username: string) {
    console.log("logout username :", username)
  }
  registration(username: string, password: number, mobileNumber: number, emailId: string, address: string, city: string, street: string, country: string) {
    console.log("newUsername :", username)
    console.log("newuserPassword :", password)
    console.log("mobileNumber :", mobileNumber)
    console.log("newUseremailid :", emailId)
    console.log("address :", address)
    console.log("city :", city)
    console.log("street :", street)
    console.log("country :", country)
  }

}


