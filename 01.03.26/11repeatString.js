function repeatString(str, n) {
    var newstr = "";

    while(n) {
        newstr += str;
        n--;
    }

    return newstr;
}

console.log(repeatString("a", 3));
console.log(repeatString("hi", 1));
console.log(repeatString("x", 0));