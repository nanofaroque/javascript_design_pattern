'use strict'
const Shape = require('./shape')
class Circle extends Shape{
    constructor(){
        super();
    }
    draw(){
        console.log('I am drawing cicle')
    }
}
module.exports = Circle;