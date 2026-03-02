function countDigits(n) {
    if(!n) return 1;
    if(n < 0) n = -n;
    var count = 0;

    while(n) {
        count++;
        n = Math.floor(n/10);
    }

    return count;
}

console.log(countDigits(12345));
console.log(countDigits(0));
console.log(countDigits(-98));