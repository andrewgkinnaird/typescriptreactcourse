interface Reportable {
  summary():string;
}

const oldCivic = {
  name:'civic',
  year:new Date(),
  broken:true,
  summary():string {
    return `Name: ${this.name}`;
  }
}

const drink = {
  color:'brown',
  summary():string {
    return `My drink is ${this.color}`
  }
}

const printSummary = (item:Reportable):void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);

// so why interfaces?  They can reduce redundant code - i.e. annotating object types multiple times over many functions that implement that object as an argument