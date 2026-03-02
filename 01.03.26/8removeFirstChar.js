function removeFirstChar(str) {
    var newstr = "";

    for(var i = 1; i < str.length; i++) {
        newstr += str[i];
    }

    return newstr;
}

console.log(removeFirstChar("hello"));
console.log(removeFirstChar("a"));
console.log(removeFirstChar(""));