function ConvertToNumber(value) {
    let num = Number(value);

    return (isNaN(num)) ? null : num;
}

let value1 = "56";
let value2 = "Hello";
let value3 = 0;

console.log(ConvertToNumber(value1));
console.log(ConvertToNumber(value2));
console.log(ConvertToNumber(value3));