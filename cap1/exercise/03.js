// Tabuada como função e passagems de parâmetros.

function inicio(timesTable) {

  let count = 0;
  let limit = 10;

  do {
    let result = timesTable * count;
    console.log(`${timesTable} x ${count} = ${timesTable*count}`);
    count++;
  } while(count <= limit);
}

inicio(100)