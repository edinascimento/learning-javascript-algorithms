function calcularPromocao() {
  var inProduto = document.getElementById('inProduto');
  var inPreco = document.getElementById('inPreco');
  var outPromocao = document.getElementById('outPromocao');
  var outPromocaoTerceiroProduto = document.getElementById('outPromocaoTerceiroProduto');

  var produto = inProduto.value;
  outPromocao.textContent = `${produto} - Promoção: Leve 3 por R$ ${((inPreco.value * 2) + inPreco.value * 0.5).toFixed(2)}`

  outPromocaoTerceiroProduto.textContent = `O 3 produto sai por R$: ${(inPreco.value * 50 / 100).toFixed(2)}`;

}

var btnVerPromocao = document.getElementById('btnVerPromocao');
btnVerPromocao.addEventListener('click', calcularPromocao);