var object = {};

var prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype);

console.log(Object.prototype.isPrototypeOf(object))