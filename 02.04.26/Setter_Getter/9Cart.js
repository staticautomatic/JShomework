class Cart {
    #_total = 0;
    constructor() {}

    get _total() {
        return this.#_total;
    }

    set _total(itemPrice) {
        if(itemPrice < 0) {
            return;
        }
        this.#_total += itemPrice;
    }
}

let cart = new Cart();
cart._total = 40;
cart._total = 345;
console.log(cart._total);