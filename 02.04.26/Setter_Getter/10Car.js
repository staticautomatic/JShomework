class Car {
    #_speed;
    constructor() {}

    set _speed(value) {
        if(value > 200){
            console.log('Too fast');
            return;
        }
        this.#_speed = value;
    }
}

let car = new Car();
car._speed = 220;
car._speed = 100;
