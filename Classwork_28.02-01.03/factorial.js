function factorial(num) {
    if(num < 0) return "The number is negative!";
    var sum = 1;

    while(num) {
        sum *= num;
        num -= 1;
    }

    return sum;
}

var num = -8;
console.log(factorial(num));
