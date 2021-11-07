object = new Object();

object.name = "Edipo";

var property;
for (property in object) {
  console.log("Name : " + property);
  console.log("Value: " + object[property])
}