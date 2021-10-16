function calcularPreco() {
  var medicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById('inPrecoMedicamento');
  var outPutMedicamento = document.getElementById('outMedicamentoNome')

  var preco = parseInt(Number(inPreco.value));

  var mNome = medicamento.value;

  outPutMedicamento.textContent = "Promocao de " + mNome;
  outPutPromocao.textContent = "Leve 2 unidades por apenas R$: " + preco * 2; 

}

var btnCalcularPreco = document.getElementById('btnCalcularPreco');

btnCalcularPreco.addEventListener('click', calcularPreco);