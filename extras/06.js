var object = {};

console.log(object.toString())

object.toString = function() {
  return ["object Custom"];
};

console.log(object.toString());

// apaga a propriedade
delete object.toString;
console.log(object.toString());