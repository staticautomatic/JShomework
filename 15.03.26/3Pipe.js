function pipe(...funcs) {
    let allFuncs = [...funcs];
    return function (num) {
        let res = num;
        for(let func of allFuncs) {
            res = func(res);
        }
        return res;
    };
}


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));