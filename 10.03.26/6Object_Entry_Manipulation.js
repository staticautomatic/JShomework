let obj = {
    Alex: 26,
    Alice: 15,
    Aro: 28
};

let result = Object.entries(obj).filter(([name, age]) => age >= 18);
result = Object.fromEntries(result);

// let result = Object.fromEntries(
//              Object.entries(obj).filter(([name, age]) => age >= 18);                
//              );

console.log(result);
