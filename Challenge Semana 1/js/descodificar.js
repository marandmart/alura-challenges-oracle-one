const descodificar = (mensagem) => {
  let chave = [
    "[a\u00E0-\u00E5]i",
    "[e\u00E8-\u00EB]nter",
    "[i\u00EC-\u00EF]mes",
    "[o\u00F2-\u00F6]ber",
    "[u\u00F9-\u00FC]fat",
  ];

  let regex = new RegExp(chave.join("|"), "ig");

  const trocarCaracteres = (match) => {
    let tamanhoChave = chave.length;
    for (let i = 0; i < tamanhoChave; i++) {
      let regexCaractere = new RegExp(chave[i], "i");
      if (regexCaractere.test(match)) {
        return match[0];
      }
    }
  };

  return mensagem.replace(regex, trocarCaracteres);
};
