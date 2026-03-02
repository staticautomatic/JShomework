function contains(arr, value) {
    for(var num of arr) {
        if(value === num) return true;
    }

    return false;
}

console.log(contains([1, 2, 3], 2));
console.log(contains([1, 2, 3], 5));
console.log(contains([], 1));