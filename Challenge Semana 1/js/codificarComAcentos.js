const codificar = (mensagem) => {
  let chave = {
    "[a\u00E0-\u00E5]": "ai",
    "[e\u00E8-\u00EB]": "enter",
    "[i\u00EC-\u00EF]": "imes",
    "[o\u00F2-\u00F6]": "ober",
    "[u\u00F9-\u00FC]": "ufat",
  };

  let regex = new RegExp(Object.keys(chave).join("|"), "ig");

  const trocarCaracteres = (match) => {
    let chaveLista = Object.entries(chave);
    let tamanhoDaLista = chaveLista.length;
    for (let i = 0; i < tamanhoDaLista; i++) {
      let regexCaractere = new RegExp(chaveLista[i][0], "i");
      if (regexCaractere.test(match)) {
        return "".concat(match, chaveLista[i][1].slice(1));
      }
    }
  };

  return mensagem.replace(regex, trocarCaracteres);
};
