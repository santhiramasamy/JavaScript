const exampleSet = new Set([1,1,1,2,2,2,2])

exampleSet.add(5); 
exampleSet.add(5).add(17);// adding new elements to a List
console.log(exampleSet);

console.log(exampleSet.delete(5));
console.log(exampleSet);
console.log(exampleSet.has(5));
console.log(exampleSet);
console.log(exampleSet.size);
exampleSet.clear();
//console.log(exampleSet.size);// It will return only the count of unique elements in a list

const exampleSet1 = new Set([1,1,1,2,2,2,2,3])
console.log(exampleSet1);
