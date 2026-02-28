function IsEven(num) {
    if(!(num % 2)) { return true; }
    
    return false;
}

let num = 35;

if(IsEven(num)) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}