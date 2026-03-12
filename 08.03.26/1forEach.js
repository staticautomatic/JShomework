function forEach(array, callback) {
    for(let i in array) {
        callback(array[i], i, array);
    }
}

let arr = [28, 10, 6];

console.log(forEach(arr, (elem) => console.log(elem)));