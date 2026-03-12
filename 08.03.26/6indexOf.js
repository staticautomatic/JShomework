function indexOf(array, searchElement) {
    for(let i in array) {
        if(array[i] === searchElement) return i;
    }
    return -1;
}

console.log(indexOf([-2, 23, 1, 0], 1));