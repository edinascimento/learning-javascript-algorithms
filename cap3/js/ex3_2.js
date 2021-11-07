function calcularPeso() {
  // cria referência aos elementos manipulados pela function
  var inNome = document.getElementById("inNome");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inAltura = document.getElementById("inAltura");
  var outResposta = document.getElementById("outResposta");

  // Obtem o conteúdo dos campos de edição da página
  var nome = inNome.value;
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var altura = Number(inAltura.value)

  // Verifica se nome foi preenchido e sexo selecionado.
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus();
    return;
  }

  // se altura vazio (0) ou NaN: Not-a-number (um texto for informado, por examplo)
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...');
    inAltura.focus();
    return;
  }

  // se masculino (significa se masculino == true);
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  // apresenta a resposta (altera o conteúdo do linha outResposta)
  outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";

}

function limpaCampos() {
  // Limpa os conteúdos dos elementos
  document.getElementById("inNome").value = "";
  document.getElementById("rbMasculino").checked = false;
  document.getElementById("rbMasculino").checked = false;
  document.getElementById("inAltura").value = "";
  document.getElementById("outResposta").value = "";
  // posiciona (joga o foco) no elemento inNome
  document.getElementById("inNome").focus();
}

// cria referência ao elemento btCalcular e registra evento associado a calcularPeso
var btResultado = document.getElementById("btCalcularPeso");
btResultado.addEventListener('click', calcularPeso);

// cria referência  ao elemento btLimpar 
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limpaCampos);