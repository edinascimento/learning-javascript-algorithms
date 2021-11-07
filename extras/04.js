// Tipos de Propriedade
var person = {
  _name: "Nicolas",
  get name() {
    console.log('Reading name');
    return this._name;
  },
  set name(value) {
    console.log('Setting name to %s', value);
    this._name = value;
  }
};

person.name = "Greag";
console.log(person.name);



