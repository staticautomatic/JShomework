class Temperature {
    #_celsius;
    constructor() {}

    get _celsius() {
        return ((this.#_celsius * (9 / 5)) + 32);
    }

    set _celsius(value) {
        this.#_celsius = value;
    }
}

let temp1 = new Temperature();
temp1._celsius = 30;
console.log(temp1._celsius); 