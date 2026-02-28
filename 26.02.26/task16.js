function ConvertToBoolean(value) {
    let boolval = Boolean(value); // !!value

    return boolval;
}

let value1 = "54";
let value2 = 0;
let value3 = 28;
let value4 = NaN;

console.log(ConvertToBoolean(value1));
console.log(ConvertToBoolean(value2));
console.log(ConvertToBoolean(value3));
console.log(ConvertToBoolean(value4));
