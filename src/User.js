const ScooterApp = require('./ScooterApp')

class User extends ScooterApp{
  constructor(username,password,age,registeredUsers){
 super(registeredUsers)
 this.username = username
 this.password = password
 this.age = age
 this.loggedIn=false


  
    
  }

  login=(password)=>{
  if(this.registeredUsers[this.username]===password)
      {console.log("logged in")
    this.loggedIn=true}
      else{console.log("login incorrect")}
  }
 logout=()=>{
  if(this.loggedIn=true){
this.loggedIn=false
console.log("logged out")}
 }

}



let user = new User ("Ciaraerica23","Marines23@",27)
user.login("Marines23@")
user.logout("Ciaraerica23")


module.exports = User
