const ScooterApp = require('./ScooterApp');


let serial = 0
let nextSerial = serial+1
let charge = 10
let isBroken = false


class Scooter{
  
  constructor(station){
   
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
else {


this.user=user
this.serial= this.serial+1
this.nextSerial=this.serial+1



}
}

}

let scooter = new Scooter("jfkScooters")

scooter.rent("Ciaraerica23")





module.exports = Scooter
