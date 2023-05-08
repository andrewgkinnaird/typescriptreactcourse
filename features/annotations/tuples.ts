const pepsiObject: {color:string,carbonated:boolean,sugar:number}= {
  color:'brown',
  carbonated:true,
  sugar:40
}

//type alias
type Drink = [string,boolean,number];

const pepsiTuple: Drink = ['brown',true,40];
const teaTuple: Drink = ['brown',false,0];

//do we really need tuples?  usually we'd reach for an object.  The keys are very descriptive.  Compare the pepsiObject and pepsiTuple above