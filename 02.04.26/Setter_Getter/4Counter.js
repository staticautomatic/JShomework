class Counter {
    #_count = 0;
    constructor() {}

    increment() {
        this.#_count++;
    }

    get _count() {
        return this.#_count;
    }
}

let counter = new Counter();
counter.increment();
counter.increment();
console.log(counter._count);