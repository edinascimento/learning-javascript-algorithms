function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}

var person1 = new Person("Edipo Nascimento");
var person2 = new Person("Fernando Silva");
person1.sayName();
person2.sayName();