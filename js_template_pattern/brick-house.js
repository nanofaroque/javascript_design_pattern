'use strict';
var HouseTemplate = require('./house-template');

class BrickHouse extends HouseTemplate{

    constructor(){
        super();
    };
    buildWalls(){
        console.log('Building walls for brick house');
    }

    buildPillars(){
        console.log('Building pillars for brick house')
    }
}

module.exports = BrickHouse;