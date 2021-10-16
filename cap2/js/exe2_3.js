function mostrarPromocao() {
  // cria referência aos elementos manipulados pelo programa
  var inVeiculo = document.getElementById('inVeiculoNome');
  var inPreco = document.getElementById('inValorVeiculo');
  var outVeiculo = document.getElementById('outVeiculoNome');
  var outEntrada = document.getElementById('outPrecoPorCento');
  var outParcela = document.getElementById('outParcelamento');

  // obtém valores do campo de entrada
  var veiculo = inVeiculo.value; 
  var preco = Number(inPreco.value);
  
  // Calcula valor da entrada e das parcelas.
  var entrada = preco * 0.50;
  var parcelas = (preco * 0.50) / 12;

  // Altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = "Promoção " + veiculo;
  outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
  outParcela.textContent = "+ 12x de R$: " + parcelas.toFixed(2); 

}

// cria uma referência ao botão btnVerPromocao
var btnCalcularPreco = document.getElementById('btnCalcularPreco');

// registra um evento assosiação ao botão, para carregar uma função.
btnVerPromocao.addEventListener('click', mostrarPromocao);