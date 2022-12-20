import { Animal,Cat } from './animal.js';
let cat = new Cat('cat',4,"long") //get values
//cat.legs = 5 (2) // set values
//cat.type = 'pussy cat' //(1)
//console.log(cat) //(1)
//cat.makeNoise('meawww') //(3)
//console.log(cat.metadata) //(4)// metadata is treated as an object
//console.log(Animal.return10()) //(5) //gives output 10. No need to create an instance
console.log(cat)
cat.makeNoise();
console.log(cat.metadata)

