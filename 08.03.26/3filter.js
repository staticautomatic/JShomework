function filter(array, callback) {
    let res = [];

    for(let i in array) {
        if(callback(array[i], i, array)) {
            res.push(array[i]);
        }
    }

    return res;
}

console.log(filter([34, 3, 65, 11, 23, 1, 10], (elem) => elem >= 18));