document.addEventListener("DOMContentLoaded", () => {
  let criptografarBtn = document.getElementById("criptografarBtn");
  let descriptografarBtn = document.getElementById("descriptografarBtn");
  let copiarBtn = document.getElementById("copiarBtn");

  criptografarBtn.addEventListener("click", criptografar);

  descriptografarBtn.addEventListener("click", descriptografar);

  copiarBtn.addEventListener("click", copiarTexto);
});

const criptografar = () => {
  let texto = document.getElementById("cripto-texto");

  let textoCriptografado = codificar(texto.value);

  let destino = document.getElementById("texto-resultado");

  destino.value = textoCriptografado;
};

const descriptografar = () => {
  let texto = document.getElementById("cripto-texto");

  let textoCriptografado = descodificar(texto.value);

  let destino = document.getElementById("texto-resultado");

  destino.value = textoCriptografado;
};

const copiarTexto = () => {
  let destino = document.getElementById("texto-resultado");

  navigator.clipboard.writeText(destino.value);
};
