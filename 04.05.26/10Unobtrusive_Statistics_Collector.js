let mapCounter = new WeakMap();

function getStats(obj) {
    if(mapCounter.has(obj)) {
       let val = mapCounter.get(obj);
       val++;
       mapCounter.set(obj, val);
       return mapCounter.get(obj);
    }
    mapCounter.set(obj, 0);
    return mapCounter.get(obj);
}

function trackAccess(obj) {
    return new Proxy(obj, {
        get(target, prop) {
            getStats(obj);
            return Reflect.get(target, prop);
        }
    });
}


// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3