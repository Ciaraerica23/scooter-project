const ScooterApp = require('./ScooterApp');
const User = require('./User');

let serial = 0
let nextSerial = serial+1
let charge = 100
let isBroken = false

class Scooter extends ScooterApp{
  
  constructor(station,loggedIn){
    super(loggedIn)
    if(station===undefined)throw new Error("Must have a station")
    this.serial=serial
    this.nextSerial = nextSerial
    this.charge = charge
    this.isBroken = isBroken
    this.user = null
    this.station=station
   
    
    
    

   
   
    
    
    
  }



dock=(station)=>{
if(station===this.station){
this.station = null
this.user = null}
}
async repair() {
  console.log('Starting repairs');
  isBroken = false
  this.isBroken=false
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

  console.log('Repairs are complete');   


}
async recharge() {
  console.log('Starting charge');
  charge = 100
  this.charge=100
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  

  console.log('Charge complete');   
  
}
rent=(user)=>{
 
  if(this.charge<20){
   
    console.log("needs to charge")
    this.recharge()
  }if(this.isBroken===true){
   this.repair()
    console.log("this scooter needs repair")}
    if(this.stations[this.station][0]===0){
      console.log("no more scooters to rent at this station")
    }else
if(this.loggedIn.includes(user)===true){
this.user = user

this.serial= this.serial+1
this.nextSerial=this.serial+1
this.stations[this.station][0]=this.stations[this.station][0]-1


}else{console.log("user needs to login")}
}

}

let scooter = new Scooter("jfkScooters")

scooter.rent("Ciaraerica23")
//scooter.rent("Darons")
//scooter.recharge()
//scooter.dock("jfkScooters")
//scooter1.rent("hillary")
console.log(scooter)
//console.log(scooter)
/*scooter.repair()
scooter.recharge()
console.log(scooter)
//scooter.dock("jfk road")
console.log(scooter)
let scooter2 = new Scooter("wavy bridge")
scooter2.rent("Jim")
console.log(scooter2)*/




module.exports = Scooter
