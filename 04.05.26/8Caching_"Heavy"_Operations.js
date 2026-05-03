let weakMap = new WeakMap();

function heavyCalc(obj) {
    let jsonObj = JSON.stringify(obj);
    if(weakMap.has(jsonObj)) {
        return weakMap.get(jsonObj);
    }

    for(let i = 0; i < 1000000000; ++i) {}
    weakMap.set(obj, obj.value * 10);
    return weakMap.get(obj);
}

// Input
const dataObj = { value: 10 };

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100