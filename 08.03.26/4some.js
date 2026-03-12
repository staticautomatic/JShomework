function some(array, callback) {
    for(let index in array) {
        if(callback(array[index], index, array)) {
            return true;
        }
    }
    return false;
}

console.log(some([3, 5, 45, 21, 1], (elem) => !(elem % 2)));