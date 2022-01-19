const descodificarSimples = (mensagem) => {
  let chave = ["ai", "enter", "imes", "ober", "ufat"];

  let regex = new RegExp(chave.join("|"), "ig");

  return mensagem.replace(regex, (match) => {
    return match[0];
  });
};
