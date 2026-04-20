let myRange = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        let current = this.to;
        return {
            next: () => {
                if(current >= this.from) {
                    return {value: current--, done: false};
                } else {
                    return {done: true};
                }
            }
        }
    }
}

for (const elem of myRange) {
    console.log(elem);
}

let obj = [...myRange];
console.log(obj);