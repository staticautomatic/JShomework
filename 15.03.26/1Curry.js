function curry(cb) {
    let sizeOfCallback = cb.length;
    let callbackArgs = [];
    return function curried(...args) {
        callbackArgs.push(...args);
        if(callbackArgs.length >= sizeOfCallback) {
            let res = cb(...callbackArgs);
            callbackArgs.length = 0;
            return res;
        }
        return curried;
    };
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24