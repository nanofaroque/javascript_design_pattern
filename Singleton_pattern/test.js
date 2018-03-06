const Singleton = require('./singleton');
var singleton= Singleton.getInstance();
singleton.add(1);
console.log(singleton.getItems())
singleton.add(2);
console.log(singleton.getItems())
singleton.add(3);
console.log(singleton.getItems())
singleton.add(4);
console.log(singleton.getItems())
singleton.add(5);
console.log(singleton.getItems())
singleton.add(6);
singleton.variable =8;
console.log(singleton.getItems())
console.log(singleton.variable)