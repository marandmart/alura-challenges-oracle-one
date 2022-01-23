document.addEventListener("DOMContentLoaded", () => {
  // seleciona os botoes
  let criptografarBtn = document.getElementById("criptografarBtn");
  let descriptografarBtn = document.getElementById("descriptografarBtn");
  let copiarBtn = document.getElementById("copiarBtn");
  let limparBtn = document.getElementById("limparBtn");

  // adiciona os eventos aos botoes e suas respectivas funcoes
  criptografarBtn.addEventListener("click", (e) => processarTexto(e));
  descriptografarBtn.addEventListener("click", (e) => processarTexto(e));
  copiarBtn.addEventListener("click", copiarTexto);
  limparBtn.addEventListener("click", limparTexto);

  // seleciona o campo de texto
  let inputTextarea = document.getElementById("entrada-texto");

  // adiciona ou remove o botão de limpar
  inputTextarea.addEventListener("input", (e) => {
    if (e.target.value.length) {
      limparBtn.classList.remove("hide-button");
    } else {
      limparBtn.classList.add("hide-button");
    }
  });

  // coloca o foco no elemento para começar digitação mais rápido
  inputTextarea.focus();
});

const processarTexto = (e) => {
  // seleciona o campo do texto
  let fonte = document.getElementById("entrada-texto");

  // seleciona o campo que receberá o texto criptografado
  let destino = document.getElementById("texto-resultado");

  // criptografa o texto de acordo com o botão apertado
  if (e.target.id == "criptografarBtn") {
    destino.textContent = criptografar(fonte.value);
  } else if (e.target.id == "descriptografarBtn") {
    destino.textContent = descriptografar(fonte.value);
  }

  alterarVisualizacao();
};

const copiarTexto = () => {
  // seleciona o campo que recebe a mensagem processada
  let destino = document.getElementById("texto-resultado");

  // salva na clipboard
  navigator.clipboard.writeText(destino.textContent);
};

const limparTexto = () => {
  document.getElementById("entrada-texto").value = "";
  document.getElementById("limparBtn").classList.add("hide-button");
  document.getElementById("entrada-texto").focus();
};

const alterarVisualizacao = () => {
  let resultado = document.getElementById("mostra-resultado");
  let semResultado = document.getElementById("sem-resultado");

  semResultado.classList.add("esconder");
  resultado.classList.remove("esconder");
};
