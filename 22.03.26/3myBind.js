Function.prototype.myBind = function(thisArg, ...args) {
    let originThis = this;
    return function(...args2) {
        let obj = thisArg ?? globalThis;
        let fn = Symbol();
        obj[fn] = originThis;
        let res = obj[fn](...(args ?? []), ...(args2 ?? [])); // проверка на аргументы, без этого выдаёт ошибку
        delete obj[fn];
        return res;
    }
}
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));