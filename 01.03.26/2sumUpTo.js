function sumUpTo(n) {
    var sum = 0;
    for(; n > 0; n--) {
        sum += n;
    }

    return sum;
}

console.log(sumUpTo(1));
console.log(sumUpTo(5));
console.log(sumUpTo(10));