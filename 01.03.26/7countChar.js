function countChar(str, char) {
    var count = 0;

    for(var ch of str) {
        if(ch === char) {
            count++;
        }
    }

    return count;
}

console.log(countChar("hello", "l"));
console.log(countChar("JavaScript", "a"));
console.log(countChar("abc", "d"));