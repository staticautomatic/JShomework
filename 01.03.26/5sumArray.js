function sumArray(arr) {
    var sum = 0;

    for(var num of arr) {
        sum += num;
    }

    return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([1, -1]));
console.log(sumArray([5]));