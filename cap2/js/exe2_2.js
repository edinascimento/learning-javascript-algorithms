function converterDuracao() {
  // cria referências aos elementos da página
  var inTitulo = document.getElementById('inTitulo');
  var inDuracao = document.getElementById('inDuracao');
  var outTitulo = document.getElementById('outTitulo');
  var outResposta = document.getElementById('outResposta');

  // obtém conteúdos dos campos de entrada
  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);

  // arredonda para baixo o resultado da divisão
  var horas = Math.floor(duracao / 60);
  var minutos = duracao % 60;

  // Altera o conteúdo dos parágrafos de respostas
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

// cria uma referência ao elemento btnConverter (botão)
var btnConverter = document.getElementById('btnConverter');

btnConverter.addEventListener('click', converterDuracao);