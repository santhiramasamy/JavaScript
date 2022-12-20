const player = {
 pname: "santhi",
 age: "22",
 address: 
 {
    city:"chennai"
 }
};

const {pname, age, address:{city}} = player;
console.log(`Player ${pname} of age ${age} lives in ${city}`)