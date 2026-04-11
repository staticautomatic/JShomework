function checkProperty(obj, key) {
    let prop = obj;
    let res = Object.prototype.hasOwnProperty.call(prop, key);

    if(res) {
            return "own";
        }

    while(prop !== null) {
        if(Object.prototype.hasOwnProperty.call(prop, key)) {
            return "inherited";
        }
        prop = Object.getPrototypeOf(prop);
    }

    return "not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found

const obj = Object.create(null);
obj.value = 10;
console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited