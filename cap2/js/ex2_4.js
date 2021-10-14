function calcularValorConsumo() {
  var inPrecoQuilo = document.getElementById('inPrecoPorQuilo');
  var inConsumoCliente = document.getElementById('inConsumoCliente');
  var outPrecoAPagar = document.getElementById('outPrecoAPagar');
  var precoQuilo = Number(inPrecoQuilo.value);
  var consumoCliente = Number(inConsumoCliente.value);
  var precoFinal = (precoQuilo / 1000) * consumoCliente
  outPrecoAPagar.textContent = "Valor a pagar em R$ "+ precoFinal.toFixed(2);
}

var btnCalcularPreco = document.getElementById('btnCalcularPreco');
btnCalcularPreco.addEventListener('click', calcularValorConsumo);