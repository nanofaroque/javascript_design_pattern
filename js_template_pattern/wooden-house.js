'use strict';
var HouseTemplate = require('./house-template');
class WoodenHouse extends HouseTemplate{

    constructor(){
        super();
    };
    
    buildWalls(){
        console.log('Building walls for wooden house');
    }

    buildPillars(){
        console.log('Building pillars for wooden house')
    }
}

module.exports = WoodenHouse;