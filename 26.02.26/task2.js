function StrToUpercase(str) {
    let res = "";

    for(let ind = 0; ind < str.length; ind++) {
        if(str[ind] >= 'a' && str[ind] <= 'z') {
            res += String.fromCharCode(str.charCodeAt(ind) - 32);
        } else {
            res += str[ind];
        }    
    }

    return res;
}

let str = "Hello Everyone!";
console.log("Your string converted to Upercase:", StrToUpercase(str));