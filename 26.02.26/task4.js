function ReverseStr(str) {
    let res = "";

    for(let ind = str.length - 1; ind >= 0; ind--) {
        res += str[ind];
    }

    return res;
}

let str = "hello";
console.log("The reversed string \"hello\" is:", ReverseStr(str));