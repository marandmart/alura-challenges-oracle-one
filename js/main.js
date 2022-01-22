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

  // coloca o foco no elemento para começar digitação mais rápido
  document.getElementById("cripto-texto").focus();
});

const processarTexto = (e) => {
  // seleciona o campo do texto
  let texto = document.getElementById("cripto-texto");

  // declara variável que receberá texto processado
  let textoCriptografado;

  // criptografa o texto de acordo com o botão apertado
  if (e.target.textContent == "Criptografar") {
    textoCriptografado = criptografar(texto.value);
  } else if (e.target.textContent == "Descriptografar") {
    textoCriptografado = descriptografar(texto.value);
  }

  // seleciona o campo que receberá o texto criptografado
  let destino = document.getElementById("texto-resultado");

  // insere o texto no campo que mostra o resultado para o usuário
  destino.value = textoCriptografado;
};

const copiarTexto = () => {
  // seleciona o campo que recebe a mensagem processada
  let destino = document.getElementById("texto-resultado");

  // salva na clipboard
  navigator.clipboard.writeText(destino.value);
};

const limparTexto = () => {
  document.getElementById("cripto-texto").value = "";
};
