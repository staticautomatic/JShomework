function IsPalindrome(str) {
    for(var i = 0; i < str.length/2; i++) {
        var j = str.length - 1 -i;
        if(str[i] !== str[j]) return false;
    }

    return true;
}

var str1 = "level";
var str2 = "babu"

console.log(IsPalindrome(str1));
console.log(IsPalindrome(str2));