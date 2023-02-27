const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('scooter has a station', () => {
    let scooter1 = new Scooter("hillside")
    expect(scooter1.station).toEqual("hillside")
  
  })
  test('scooter is an object', () => {
    let scooter = new Scooter("jfk")
    expect(typeof(scooter)).toEqual("object")
  
  })
})
  

//Method tests
describe('scooter methods', () => {
   test('scooter is assigned user when rented', () => {
    let scooter = new Scooter("jfkScooters")
    scooter.rent("mary")
    expect(scooter.user).toEqual("mary")

  })
  test('station and user is returned null when docked', () => {
    let scooter = new Scooter("jfkScooters")
    scooter.rent("mary")
    scooter.dock("jfkScooters")
    expect(scooter.user).toEqual(null)
    expect(scooter.station).toEqual(null)

  })
  test('charge equals 100 after charge', async() => {
    let scooter = new Scooter("jfkScooters")
      await scooter.recharge(); 
      expect(scooter.charge).toBe(100)
   

   

  })
  test('isBroken equals false', async() => {
    let scooter = new Scooter("jfkScooters")
      await scooter.repair(); 
      expect(scooter.isBroken).toBe(false)
   

   

  })
  

})
