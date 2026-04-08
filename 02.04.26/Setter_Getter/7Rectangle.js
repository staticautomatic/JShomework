class Rectangle {
    #_width;
    #_height;
    constructor() {}

    get area() {
        return this.#_width * this.#_height;
    }

    set _width(value) {
        if(value <= 0) {
            console.log('The value cannot be negative');
            return;
        }
        this.#_width = value;
    }

    set _height(value) {
        if(value <= 0) {
            console.log('The value cannot be negative');
            return;
        }
        this.#_height = value;
    }
}

let rect = new Rectangle();
rect._width = 20;
rect._height = 30;
console.log(rect.area);