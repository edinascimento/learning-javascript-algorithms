var person1 = {
  name: "Nicholas"
};

console.log("name" in person1);

console.log(person1.propertyIsEnumerable("name"));
console.log(Object.keys(person1));