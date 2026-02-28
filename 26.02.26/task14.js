function IsNormalNum(num) {
    return (
        typeof num === "number" &&
        !Number.isNaN(num) &&
        Number.isFinite(num) &&
        Number.isSafeInteger(num)
    ); 
}


console.log(IsNormalNum(Infinity));        
console.log(IsNormalNum(-Infinity)); 
console.log(IsNormalNum(3.14));
console.log(IsNormalNum(5));
