Array.prototype.mySum = function() {
    if(this === null) return 0;
    let res = 0;
    for(let num of this) {
        if(typeof num !== 'number' || num !== num) {
            throw new Error("At least one element is not a number");
        }
        res += num;
    }
    return res;
}

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error