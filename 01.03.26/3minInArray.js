function minInArray(arr) {
    var min = Number.MAX_SAFE_INTEGER;
    for(let num of arr) {
        if(num < min) { min = num; }
    }

    return min;
}

console.log(minInArray([3, 1, 5]));
console.log(minInArray([-2, -10, 0]));
console.log(minInArray([7]));