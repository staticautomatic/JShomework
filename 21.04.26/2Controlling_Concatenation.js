let digits = [1, 2, 3];
let extraNumbers = {
    0: 0,
    1: 1,
    length: 2,
    [Symbol.isConcatSpreadable]: true
}

console.log(digits.concat(extraNumbers));

let bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;

//The array is no longer converted to one-dimensional, 
//since we changed its [Symbol.isConcatSpreadable] method to false
console.log(digits.concat(bonus));