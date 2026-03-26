Function.prototype.myApply = function(thisArg, args) {
    let obj = thisArg ?? globalThis;
    let fn = Symbol();
    obj[fn] = this;
    let res = obj[fn](...(args ?? [])); // проверка на аргументы, без этого выдаёт ошибку
    delete obj[fn];
    return res;
}
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

console.log(showInfo.myApply(user, ["New-York", "USA"]));
console.log(showInfo.myApply(null, ["New-York", "USA"])); 
console.log(showInfo.myApply(undefined, ["New-York", "USA"])); 
console.log(showInfo.myApply()); 