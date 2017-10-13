'use strict'
/**
 * This is a base class. Since JS does not have anything like interface, I will go with some kind of abstract class.
*/
class Shape{
    constructor(){}
    /**
     * Generic method to be implemented by each sub class. 
    */
    draw(){
        throw new Error('You have to implement this method');
    }
}
module.exports = Shape;