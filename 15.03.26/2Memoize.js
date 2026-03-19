function factorial(a) {
    let res = 1;
    for (let i = 2; i <= a; ++i) {
        res *= i;
    }
    return res;
}

function memoize(cb) {
    let cecheObj = {};
    return function (arg) {
        if(arg in cecheObj) return cecheObj[arg];
        return cecheObj[arg] = cb(arg);
    };
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120
