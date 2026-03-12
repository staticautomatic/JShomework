function every(array, callback) {
    for(let index in array) {
        if(!callback(array[index], index, array)) {
            return false;
        }
    }
    return true;
}

console.log(every([33, 23, 63, 3, 4], (elem) => elem % 2));