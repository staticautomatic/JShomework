function LengthOfString(str) {
    let length = 0;
    for(let ch of str) {
        length++;
    }

    return length;
}

let str = "Hello";
console.log("Length of your string is", LengthOfString(str));