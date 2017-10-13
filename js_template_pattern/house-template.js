'use strict'
class HouseTemplate{
    constructor(){};
    buildFoundations(){
        console.log('Building Foundations')
    }
    buildHouse(){
        this.buildFoundations();
        this.buildPillars();
		this.buildWalls();
		this.buildWindows();
    }

    buildFoundations(){
        console.log('Building foundations')
    }
    /**
     * Default implementation
     * 
    */
    buildWindows(){
        console.log('I am done with building windows');
    }


    buildPillars(){
        throw new Error('You have to build your own pillars')
    }

    buildWalls(){
        throw new Error('You have to build your own walls')
    }

}
module.exports = HouseTemplate;