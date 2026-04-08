let users = [{name: 'John', age: 20}, {name: 'Alice', age: 17},
             {name: 'Anna', age: 23}];
let newArrOfUsers = users.filter(obj => obj.age >= 18).map(obj => obj.name);

console.log(newArrOfUsers);