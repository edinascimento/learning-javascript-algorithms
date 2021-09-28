// Given a number return its double.
const readline = require('readline');
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question('Type a number: ', numer => {
  number = typeof(number) == 'number' ? numer : 0
  if (numer == 0) {
    console.log("You didn't type a number! Try again.")
    input.close()
    return
  }
  let double = numer * 2 
  console.log(double)
  input.close();  
})