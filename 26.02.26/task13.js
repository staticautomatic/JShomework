function Comparation(value1, value2) {
    let result = new Object();
    result.loose_comparison = (value1 == value2);
    result.strict_comparison = (value1 === value2);

    return result;
}

let value1 = 4;
let value2 = "4";

let res = Comparation(value1, value2);
console.log("The result of loose comparison:", res.loose_comparison);
console.log("The result of stric comparison:", res.strict_comparison);