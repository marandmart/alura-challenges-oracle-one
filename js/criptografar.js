const criptografar = (mensagem) => {
  let chave = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };


  let fromKey = new RegExp(Object.keys(chave).join("|"), "g");

  let numbersRegex = new RegExp("[0-9]", "g");

  // retorna os valores de acordo com as chaves
  let mensagemProcessada = mensagem.replace(fromKey, (match) => {
    return chave[match];
  });

  // retira os números
  let mensagemSemNumeros = mensagemProcessada.replace(numbersRegex, (match) => {
    console.log(match);
    return "";
  })

  // retira todas as letras maiusculas
  return mensagemSemNumeros.toLowerCase();

};


let teste = "UmA StrInG";
let teste2 = "UMA STR1NG";
let teste3 = "DT1F";
let teste4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let teste5 = "0123456789";
let teste6 = "Árètado";

console.log(criptografar(teste4).split("undefined"));
// console.log(criptografar(teste4));