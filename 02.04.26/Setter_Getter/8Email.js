class Email {
    #_email;
    constructor() {}

    set _email(value) {
        if(value.includes('@')) {
            this.#_email = value;
            return;
        }
        console.log('Invalid email');
    }
}

let mail1 = new Email();
let mail2 = new Email();
mail1._email = 'JoneStone@mail.ru';
mail2._email = 'Jone_mail.ru';