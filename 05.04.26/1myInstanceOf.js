function myInstanceOf(obj, Constructor) {
    if(obj === null) return false;
    if(typeof obj === 'undefined' || typeof obj === 'boolean' ||
       typeof obj === 'number' || typeof obj === 'bigint' ||
       typeof obj === 'symbol' || typeof obj === 'string') 
       { return false; }

    if(Constructor === Object) { 
        return true; 
    }
    else if(Constructor === Function) {
        if(obj.__proto__ === Function.prototype) {
            return true;
        }
    }
    else if(Constructor === Array) {
        if(obj.__proto__ === Array.prototype) {
            return true;
        } 
    } 
    else if(Constructor === String) {
        if(obj.__proto__ === String.prototype) {
            return true;
        } 
    }
    else if(obj.__proto__ === Constructor.prototype ||
            obj.__proto__.__proto__ === Constructor.prototype) {
        return true;
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
