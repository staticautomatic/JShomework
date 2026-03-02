function isPrime(num) {
    if(num < 2) return false;
    if(num === 2) return true;
    if(!(num % 2)) return false;

    for(var i = 3; i*i <= num; i++) {
        if(!(num % i)) return false;
    }

    return true;
}


const num = 2;
console.log(isPrime(num));