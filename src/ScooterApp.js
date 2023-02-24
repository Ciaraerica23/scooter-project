const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
 
      constructor(){
        this.registeredUsers = []
        
       
      }
      registerUser=(username,password,age)=>{
        this.registeredUsers.push(username)
        this.registeredUsers.push(password)
        this.registeredUsers.push(age)
      }
      
   
 
            
          
      
      
      

      
}
let user = new ScooterApp()
user.registerUser("Ciaraerica23","Marines23@",27)
console.log(user)



module.exports = ScooterApp
