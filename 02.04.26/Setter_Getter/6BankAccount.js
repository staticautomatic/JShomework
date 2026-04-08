class BankAccount {
    #_balance = 0;
    constructor() {}

    get _balance() {
        return this.#_balance;
    }

    set _balance(value) {
        if(value < 0) {
            console.log('The money is negative');
            return;
        }
        this.#_balance += value;
    }
}

let BC = new BankAccount();
BC._balance = 500;
BC._balance = 45;
console.log(BC._balance);