let arrOfObj = [ {name: "Anna", age: 17},
                 {name: "John", age: 20} ];
let newArrOfObj = arrOfObj.filter(obj => obj.age >= 18)
                          .map(obj => `${obj.name} is ${obj.age} years old`);

console.log(newArrOfObj);