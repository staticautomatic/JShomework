class Product {
    #_price;
    constructor() {}

    get _price() {
        return ((this.#_price * 10) / 100);
    }

    set _price(value) {
        this.#_price = value;
    }
}

let prod = new Product();
prod._price = 500;
console.log(prod._price);