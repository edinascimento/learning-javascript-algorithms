var person1 = {
  name: "Nicholas"
};

var person2 = new Object();
person2.name = "Nicholas";

console.log(person1);
console.log(person2);

//  Adicionado e alterando propriedades de um objeto

// verificando a existencia de propriedades
var person1 = {
  name: "Edipo",
  sayName: function() {
    console.log(this.name)
  }
}

console.log("sayName" in person1);
console.log(person1.hasOwnProperty("name"));

