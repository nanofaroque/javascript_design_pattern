const woodenHouse = require('./wooden-house');
const brickHouse = require('./brick-house');

var WoodenHouse = new woodenHouse();
WoodenHouse.buildHouse();

console.log('********---**********');

var BrickHouse = new brickHouse();
BrickHouse.buildHouse();


