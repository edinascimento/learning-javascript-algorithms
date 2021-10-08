function SayHi() {
  // obtém o conteúdo do campo (com id=nome)

  var inputName = document.getElementById('name');
  var name = inputName.value;

  // Exibe no paragráfo (resposta) : "Olá " e o nome informado.
  const result = document.getElementById('result');
  result.textContent = `Olá, ${name}`; 
}

// Cria uma referência ao botão (com id = mostrar)
var show = document.getElementById('show');

show.onclick = SayHi;