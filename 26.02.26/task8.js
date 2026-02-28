function IsSubStr(str, substr) {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < substr.length; j++) {
            if(str[i] != substr[j]) {
                break;
            } else {
                i++;
                if(j == substr.length - 1) {return true;}
                continue;
            }
        }
            
 
    }

    return false;
}

let str = "Hello world";
let substr = "world";

if(IsSubStr(str, substr)) {
    console.log("Yes");
} else {
    console.log("No");
}
