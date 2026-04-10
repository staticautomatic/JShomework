class Shape {
    constructor() {
        throw new Error("Cannot instantiate abstract class");
    }

    getArea() {
        throw new Error("Method not implemented");
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return π * this.radius * this.radius;
    }
}

const shape = new Shape();
// Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
// 50

