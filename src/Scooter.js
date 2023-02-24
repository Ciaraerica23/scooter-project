const ScooterApp = require('./ScooterApp');
const User = require('./User');


class Scooter{

  constructor(station){
    this.station = station
    this.nextSerial = 2
    this.serial = 1
    this.charge = 19
    this.isBroken = false
    this.user = null
   
   
    
    
    
  }
  async recharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100
  
    console.log('Charge complete');   
    
  }
rent=(user)=>{
  if(this.charge<20){
    this.recharge()
    this.charge=100
  }else if(this.isBroken===true){return "this scooter needs repair"}
  else{
this.user = user
this.station = null
this.serial = this.nextSerial
this.nextSerial += 1


}
  
}
dock=(station)=>{

this.station = station
this.user = null
}
  

}

let scooter = new Scooter("jfk road")
//cooter.rent("Maryanne")
//scooter.dock("jfk road")
console.log(scooter)
let scooter2 = new Scooter("wavy bridge")
//scooter2.rent("Jim")
console.log(scooter2)




module.exports = Scooter
