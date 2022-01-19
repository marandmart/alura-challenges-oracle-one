const codificarSimples = (mensagem) => {
  let chave = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  let regex = new RegExp(Object.keys(chave).join("|"), "ig");

  return mensagem.replace(regex, (match) => {
    return chave[match];
  });
};
