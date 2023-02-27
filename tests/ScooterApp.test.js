const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('ScooterApp methods', () => {
    test('register user', () => {
      let scooterApp = new ScooterApp()
      scooterApp.registerUser("Ciaraerica","Marines",19)
      expect(scooterApp.registeredUsers["Ciaraerica"]).toEqual("Marines")
      
    
    
    })
    test('login user', () => {
        let scooterApp = new ScooterApp()
        scooterApp.registerUser("Ciaraerica","Marines",19)
        scooterApp.login("Ciaraerica","Marines")
        expect(scooterApp.loggedIn.includes("Ciaraerica")).toEqual(true)
        
      
      
      })
      test('logout user', () => {
        let scooterApp = new ScooterApp()
        scooterApp.registerUser("Ciaraerica","Marines",19)
        scooterApp.login("Ciaraerica","Marines")
        scooterApp.logout("Ciaraerica")
        expect(scooterApp.loggedIn.includes("Ciaraerica")).toEqual(false)
        
      
      
      })
      test('rent scooter', () => {
        let scooterApp = new ScooterApp()
        scooterApp.registerUser("Ciaraerica","Marines",19)
        scooterApp.login("Ciaraerica","Marines")
        let first = scooterApp.stations["jfkScooters"][0]
       scooterApp.rent("Ciaraerica","jfkScooters")
        expect(scooterApp.stations["jfkScooters"][0]).toEqual(first-1)
        
      
      
      })
      test('dock scooter', () => {
        let scooterApp = new ScooterApp()
        scooterApp.registerUser("Ciaraerica","Marines",19)
        scooterApp.login("Ciaraerica","Marines")
       scooterApp.create("jfkScooters")
       let first = scooterApp.stations["jfkScooters"][0]
       scooterApp.rent("Ciaraerica","jfkScooters")
       scooterApp.dock("jfkScooters","jfkScooters")
      
        expect(scooterApp.stations["jfkScooters"][0]).toEqual(first)
        
      
      
      })
      test('create scooter', () => {
        let scooterApp = new ScooterApp()
        scooterApp.registerUser("Ciaraerica","Marines",19)
        scooterApp.login("Ciaraerica","Marines")
        let first = scooterApp.stations["jfkScooters"][0]
       scooterApp.create("jfkScooters")
       
       
      
        expect(scooterApp.stations["jfkScooters"][0]).toEqual(first+1)
        
      
      
      })
      
})
// register user

// log in

// log out

// rent scooter

// dock scooter
