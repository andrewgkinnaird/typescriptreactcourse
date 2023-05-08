const add = (a:number,b:number):number => {
 
  return a+b;
}

const logger = (message:string):void => {
  console.log(message);
}



const throwError = ():never => {
  
  throw new Error();
 
  
}

const todaysForecast = {
  date: new Date(),
  weather:'sunny'
}
const weatherLogger = ({date,weather}:{date:Date,weather:string}):void => {
  console.log(date);
  console.log(weather);
}

weatherLogger(todaysForecast);