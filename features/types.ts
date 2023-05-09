let apples: number = 5;
let speed: string = 'fast';
let truth: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// 
let now: Date = new Date();
let obj: Object = new Object();

//arrays
let nums: number[] = [1,2,3];
let words: string[] = ['red','green','blue'];
let truths: boolean[] = [true,false,true];



let point: {x:number;y:number} = {
  x:10,
  y:29
}

const logNumber: (i:number) => void = (i:number) => {
  console.log(i);
}

//when to use annotations
// 1) function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: {x:number,y:number} = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize later
let words2 = ['red','green','blue'];
let foundWord : boolean;

for (let i = 0; i < words2.length; i++){
  if(words2[i] === 'green'){
    foundWord = true;
  }
}

// 3) var whose type cannot be inferred
let numbers = [-10, -1,12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}



