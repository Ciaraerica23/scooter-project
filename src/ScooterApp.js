//const User = require('./User')
const Scooter = require('./Scooter')

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
        this.registeredUsers[username]=password
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
        this.loggedIn = loggedIn.filter(e => e !== username)
          console.log("user logged out")
        }else{
          console.log("user cannot be located or user not logged in")
        }
      }
      create=(station)=>{
        if(Object.keys(stations).includes(station)){
          if(station==='jfkScooters'){
            this.stations[station][0]=++stations[station][0]
          }
          if(station==='wavyScooters'){
            this.stations[station][0]=++stations[station][0]
          }
          if(station==='bridgemontScooters'){
            this.stations[station][0]=++stations[station][0]
          }
         
          
         
        
          console.log("created new scooter")
        
        }else throw new Error('no such station exist')
      }
      rent=(user,scooter)=>{
        if(this.loggedIn.includes(user)){
          if(this.stations[scooter][0]===0){
            console.log("scooter already rented")
          }else{
            this.stations[scooter][0]=--this.stations[scooter][0]
            console.log("scooter rented")
          }
        }}

       dock=(scooter,station)=>{
if(scooter===station){
  
  if(station==='jfkScooters'){
    if(this.stations[station][0]>stations[station][0]){
      throw new Error('scooter already docked')
    }else{
      console.log("scooter is docked")
      this.stations[scooter][0]=++this.stations[scooter][0]
  }}

  
  if(station==='wavyScooters'){
    if(this.stations[station][0]===stations[station][0]){
      throw new Error('scooter already docked')
    }else{
      console.log("scooter is docked")
      this.stations[scooter][0]=++this.stations[scooter][0]
  }}

  if(station==='bridgemontScooters'){
      if(this.stations[station][0]===this.stations[station][0]){
        throw new Error('scooter already docked')
      }else{
        console.log("scooter is docked")
        this.stations[scooter][0]=++this.stations[scooter][0]
  }}}else{throw new Error('Station does not exist')}

      
    }
    print=()=>{
      console.log(this.registeredUsers)
      console.log(this.stations)
    }

      
}
let scooterApp = new ScooterApp()
scooterApp.registerUser("Ciaraerica23","Marines23@",27)


scooterApp.registerUser("Darons","Msmit@",28)
scooterApp.login("Ciaraerica23","Marines23@")
scooterApp.login("Darons","Msmit@")

scooterApp.create("jfkScooters")
scooterApp.create("jfkScooters")
scooterApp.create("wavyScooters")
scooterApp.rent("Ciaraerica23","jfkScooters")
scooterApp.rent("Ciaraerica23","jfkScooters")
scooterApp.rent("Ciaraerica23","jfkScooters")
scooterApp.print()



module.exports = ScooterApp
