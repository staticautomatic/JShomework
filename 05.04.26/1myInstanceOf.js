function myInstanceOf(obj, Constructor) {
    if(obj === null) return false;
    if(typeof obj === 'undefined' || typeof obj === 'boolean' ||
       typeof obj === 'number' || typeof obj === 'bigint' ||
       typeof obj === 'symbol' || typeof obj === 'string') 
       { return false; }

    let cur = obj.__proto__;
    while (cur != null)  {
        if(cur === Constructor.prototype) {
            return true;
        }
        cur = cur.__proto__;
    }
    return false;
}

function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false

console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false
