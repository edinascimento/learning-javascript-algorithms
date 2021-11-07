var object1 = new Object();

console.log(object1);
console.log(typeof object1);


object1.name = 'Edipo Nascimento'

var object2 = object1;


console.log(object1);
console.log(object2);

object2.name = 'Fernando Silva'; // Muda objeto 1 e 2
                                             
console.log(object1);
console.log(object2);