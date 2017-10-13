const Triangle = require('./triangle');
const Rectangle = require('./rectangle');
const Circle = require('./circle');
class ShapeMaker{
    /**
     * Constructor for the ShapeMaker class. 
     * It will instantiate the different shape class
    */
    constructor(){
        this.triangle = new Triangle();
        this.rectangle = new Rectangle();
        this.circle = new Circle();
    }

    /**
     * Draw a triangle 
    */
    drawTriangle(){
        this.triangle.draw();
    }
    /**
     * Draw a rectangle 
    */
    drawRectangle(){
        this.rectangle.draw();
    }

    /**
     * Draw a circle
    */
    drawCicle(){
        this.circle.draw();
    }
}
module.exports = ShapeMaker;