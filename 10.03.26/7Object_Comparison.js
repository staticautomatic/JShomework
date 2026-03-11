function myIsEqual(obj1, obj2) {
    if(obj1 === obj2) return true;
    if(typeof obj1 !== "object" || obj2 === null) return false;
    if(typeof obj2 !== "object" || obj1 === null) return false;

    let keys_obj1 = Object.keys(obj1);
    let keys_obj2 = Object.keys(obj2);

    if(keys_obj1.length !== keys_obj2.length) return false;

    for(let key of keys_obj1) {
        if(!keys_obj2.includes(key)) return false;
        if(!myIsEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

let obj1 = { 
    name: "Alex", 
    age: 25, 
    address: { 
        city: "London" 
    } 
};

let b = { 
    name: "Alex", 
    age: 25, 
    address: { 
        city: "London" 
    } 
};

let c = { 
    name: "Alex", 
    age: 26 
};

console.log(myIsEqual(a, b));
console.log(myIsEqual(a, c));