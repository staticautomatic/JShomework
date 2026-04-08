class Account {
    #_password;
    constructor() {}

    set _password(value) {
        if(value.length <= 6) {
            console.log("Password too short");
            return;
        }
        this.#_password = value;
    }
}

let obj1 = new Account();
let obj2 = new Account();

obj1._password = '123456';
obj2._password = 'Jon1234';