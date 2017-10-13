'use strict';
const Shape = require('./shape');

class Rectangle extends Shape {
    constructor() {
        super();
    }

    draw() {
        console.log('I am drawing rectangle')
    }
}

module.exports = Rectangle;