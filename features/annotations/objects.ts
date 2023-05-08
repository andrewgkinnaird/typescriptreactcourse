const profile = {
  name:'Bob',
  age:33,
  coords:{
    long:100,
    lat:90
  },
  setAge(age:number):void{
    this.age = age;
  }

  
}

const {age}:{age:number} = profile;
const {coords}:{coords:{long:number,lat:number}}= profile;
console.log(age,coords);
