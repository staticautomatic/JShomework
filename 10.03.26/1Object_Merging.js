let person1 = {
    name: "Alice",
    age: 24,
    country: "Armenia"
};

let person2 = {
    name: "Ano",
    city: "Yerevan",
    age: 28
};

let mergedPerson = Object.assign({}, person1, person2);
console.log(mergedPerson);

// or
//
// let mergedPerson = {};
// Object.assign(mergedPerson, person1, person2);
// console.log(mergenPerson);
// 
