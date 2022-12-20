//for arrays
let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");

console.log(contacts)

console.log(personalFriends);

//for objects
let person = {
    name:"Adam",
    age: 25,
    city: "Chennai"
}

let employee = {
    ...person,
    salary:50000,
    position:"Software Developer"
}

console.log(employee)