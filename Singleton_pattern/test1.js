const Singleton = require('./singleton');
var singleton= Singleton.getInstance();

console.log(singleton.getItems())