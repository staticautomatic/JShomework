let arr = [2, 34, 12, 3, 76, 7, 9];
let newArr = arr.filter(num => num % 2 == 0).map(num => num*num);

console.log(newArr);