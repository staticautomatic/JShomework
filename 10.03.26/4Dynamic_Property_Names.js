let keys = ["name", "age", "country"];
let values = ["James", 26, "Armenia"];

let obj = {};

for(let i = 0; i < keys.length; ++i) {
    obj[keys[i]] = values[i];
}

console.log(obj);