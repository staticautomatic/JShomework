function getType(value) {
    if (value === null) return "null";           
    if (Array.isArray(value)) return "array";   
    return typeof(value);                          
}


console.log(getType(null));          
console.log(getType([1, 28, 12]));
console.log(getType(function(){})); 
console.log(getType("hello"));      
console.log(getType(true));        