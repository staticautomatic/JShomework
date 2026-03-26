Function.prototype.myCall = function(thisArg, ...args) {
    let obj = thisArg ?? globalThis;
    let fn = Symbol();
    obj[fn] = this;
    let res = obj[fn](...args);
    delete obj[fn];
    return res;
}

function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));
console.log(showInfo.myCall(null, "New-York", "USA")); // печатает undefined, так как у globalThis нет имени
console.log(showInfo.myCall(undefined, "New-York", "USA")); // тоже самое
console.log(showInfo.myCall()); // если не передовать аргумента, наш thisArg будет undefined, дальше как и в верхних случаях