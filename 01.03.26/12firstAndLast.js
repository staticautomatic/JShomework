function firstAndLast(arr) {
    if(arr.length === 0) return "[]";
    return [arr[0], arr[arr.length - 1]];
}

console.log(firstAndLast([1, 2, 3]));
console.log(firstAndLast([5]));
console.log(firstAndLast([]));
