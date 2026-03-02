function average(arr) {
    var count = 0;

    for(var num of arr) {
        count += num;
    }

    return count / arr.length;
}

console.log(average([2, 4, 6]));
console.log(average([1, 1, 1, 1]));
console.log(average([5]));