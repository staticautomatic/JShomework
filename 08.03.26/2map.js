function map(array, callback) {
    let res = [];
    for(let i in array) {
        res[i] = callback(array[i], i, array);
    }

    return res;
}

console.log(map([1, 2, 3, 4], (elem) => elem *= 2));
