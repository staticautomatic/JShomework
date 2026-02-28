function FalsyValue(value) {
    if(!value) {
        return true;
    }

    return false;
}

console.log(FalsyValue(null));          
console.log(FalsyValue([1, 28, 12]));
console.log(FalsyValue("")); 
console.log(FalsyValue("hello"));      
console.log(FalsyValue(true));        