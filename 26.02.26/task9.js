function SumOfElem(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }

    return sum;
}

let arr = [1, 2, 45, 28];
console.log("The sum of elements is", SumOfElem(arr));