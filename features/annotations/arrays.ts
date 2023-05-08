const clubs:string[] = ['Man City','Liverpool','Man United'];
const dates:Date[] = [new Date()];
let empty;

const players = [
  ['Halland','Zinchenko'],
  ['Robertson','Salah'],
  ['McTominay','De Gea']
]

//help with inference when extracting values
const player1 = players[0][0]; // ts knows this is a string
const lastClub = clubs.pop(); // and here too

//prevent incompatible values
//        clubs.push(10);      //trying to add a number to a string array will cause an error in ts

// help with autocomplete - ts knows the type so it can provide all the methods and attributes available to that type
// you start writing dates[0]. and the list of Date methods are provided
// empty. provides no such list.  ts has no idea what type empty is.

// multiple types
const importantDates:(Date | String)[] = [new Date(),'important date'];