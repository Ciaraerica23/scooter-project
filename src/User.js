const ScooterApp = require('./ScooterApp')
const Scooter = require('./Scooter')
class User{
  constructor(username,password,age){
 
 this.username = username
 this.password = password
 this.age = age
 this.loggedIn ;

  
    
  }

  login=(password)=>{
    if(password===this.password){
      this.loggedIn=true
      return "logged in"
    }

}
}
let user = new User ("Ciaraerica","Marines23@",27)
console.log(user.login("Marines23@"))
console.log(user)
module.exports = User
