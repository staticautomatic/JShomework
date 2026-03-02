function power(base, exp) {
    if(exp === 1) return 1;

    var res = 1;
    while(exp) {
        res *= base;
        exp--;
    }

    return res;
}

console.log(power(2, 3));
console.log(power(5, 0));
console.log(power(3, 2));