// declaring variable
var age = 18;

console.log(`You age is: ${age}`);

// readind data from the keyboard. I serched on the internet and found an article talking about Nodejs.
// So, I used it.

const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question(`Whta is your name? `, name => {
  if (name) {
    console.log(`Hi ${name}`);
    input.close()
  }
  input.close();
})

