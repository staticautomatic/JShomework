function IsPrimitiveType(value) {
    return value === null || (typeof(value) !== "object" && typeof(value) !== "function");
}


console.log(IsPrimitiveType(42));         
console.log(IsPrimitiveType("hello"));
console.log(IsPrimitiveType(function(){}));    
console.log(IsPrimitiveType(null));       
console.log(IsPrimitiveType(10n));        