var person1 = {
  name: "Nicholas"
}

delete person1.name
console.log("name" in person1)

if ("name" in person1) {
    console.log("Property name alerdy exists in person1 object");  
} else {
  console.log("Property name was removed from the person1 object")
}