const newLocal = {
    value: 100,
    get() {
        function inner() {
            return this.value;
        }
        return inner.bind(this)();
    },
};

let res = newLocal.get();
console.log(res);

