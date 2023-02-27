const User = require('../src/User')

describe('user object', () => {
    test('user has a username,password,and age', () => {
      let user = new User("Ciaraerica23","Marines23@",19)
      expect(user.username).toEqual("Ciaraerica23")
      expect(user.password).toEqual("Marines23@")
      expect(user.age).toEqual(19)
    
    })
   

   
  })


describe('user methods', () => {
    test('user login', () => {
      let user = new User("Ciaraerica23","Marines23@",19)
      user.login("Marines23@")
      expect(user.loggedIn).toBe(true)
    
    
    })
    test('user logout', () => {
        let user = new User("Ciaraerica23","Marines23@",19)
        user.login("Marines23@")
        user.logout()
        expect(user.loggedIn).toBe(false)
      
      
      })
   

   
  })


