function sayNameForAll(label) {
  console.log(label + ":" + this.name);
}

var person1 = {
  name: "Nicholas" 
};

var person2 = {
  name: "Greg"
};

// cria uma função somente para person1
sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("peson1");

// Cria uma função só para person2
var sayNameForPerson2 = sayNameForAll.bind(person2);
sayNameForPerson2("person2");