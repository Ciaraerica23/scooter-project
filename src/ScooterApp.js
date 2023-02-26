//const User = require('./User')
//const Scooter = require('./Scooter')

let registeredUsers = {}
let jfkScooters = [0]
let wavyScooters = [0]
let bridgemontScooters = [0]
let stations = {
  jfkScooters:jfkScooters
,wavyScooters:wavyScooters,
bridgemontScooters: bridgemontScooters
}
let  logins= []
let loggedIn = []
class ScooterApp {

  
      constructor(){
        this.registeredUsers=registeredUsers
        this.stations=stations
        this.loggedIn= loggedIn
        
       
      }
      registerUser=(username,password,age)=>{
        if(age<18)throw new Error('too young to register')
        else if(Object.keys(registeredUsers).includes(username)){
            console.log( "user already registered")
        }else{
        registeredUsers[username]=password
        logins.push(username)
        logins.push(password)
      
      }}
      login=(username,password)=>{
        if(logins.includes(username) && logins.includes(password)){
          console.log('user logged in')
          loggedIn.push(username)
        }else{console.log('username or password incorrect')}
      }
      logout=(username)=>{
        if(loggedIn.includes(username)){
        loggedIn = loggedIn.filter(e => e !== username)
          console.log("user logged out")
        }else{
          console.log("user cannot be located or user not logged in")
        }
      }
      create=(station)=>{
        if(Object.keys(stations).includes(station)){
          if(station==='jfkScooters'){
            stations[station][0]=++stations[station][0]
          }
          if(station==='wavyScooters'){
            wavyScooters.push(1)
          }
          if(station==='bridgemontScooters'){
            bridgemontScooters.push(1)
          }
         
          
         
        
          console.log("created new scooter")
        }else throw new Error('no such station exist')
      }
      
   
 
            
          
      
      
      

      
}
let user = new ScooterApp()
user.registerUser("Ciaraerica23","Marines23@",27)
user.registerUser("Darons","Msmit@",28)
user.login("Ciaraerica23","Marines23@")
user.login("Darons","Msmit@")
/*
let user2 = new ScooterApp()
user2.registerUser("Ciaraerica23","hi5",18)
let user3 = new ScooterApp()
user3.registerUser("Jamal123","hines23",27)
console.log(registeredUsers)
user.login("Ciaraerica23","Marines23@")
console.log(user2)
user.logout("Ciaraerica21")
console.log(loggedIn)*/
user.create("jfkScooters")

console.log(user)


module.exports = ScooterApp
