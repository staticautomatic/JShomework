function isEven(num) {
    if(num < 0) return false;
    return !(num % 2);
}

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(0));