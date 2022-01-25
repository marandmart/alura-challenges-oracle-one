const descriptografar = (mensagem) => {
  let chave = ["ai", "enter", "imes", "ober", "ufat"];

  let regex = new RegExp(chave.join("|"), "g");

  return mensagem.replace(regex, (match) => {
    return match[0];
  });
};
