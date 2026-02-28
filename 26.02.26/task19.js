function TheSum(num1, num2) {
    if(typeof(num1) === "number" && typeof(num2) === "number") {
        return num1 + num2;
    } else {
        return -1;
    }
}

let num1 = Infinity;
let num2 = 98;

if(TheSum(num1, num2) == -1) {
    console.log("Invalid input");
} else {
    console.log("the sum of two numbers is", TheSum(num1, num2));
}