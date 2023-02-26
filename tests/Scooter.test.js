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
   test('scooter is assigned user when checked out', () => {
    let scooter = new Scooter("jfk")
    scooter.rent("mary")
    expect(scooter.user).toEqual("mary")

  })
  //rent method

  //dock method

  //requestRepair method

  //charge method

})
