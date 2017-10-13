'use strict'
const Shape = require('./shape')
class Triangle extends Shape{
    constructor(){
        super();
    }
    draw(){
        console.log('I am drawing triangle')
    }
}
module.exports = Triangle;