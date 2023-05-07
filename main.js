// contagem de palavras e caracters
// variavel de seleção
// input chamando o  id do textarea

const input = document.querySelector("#input");
// .couter chamando a classe
const counter = document.querySelector(".counter");
// butão com id toglle
const button = document.querySelector("#toggle");

// criando variavel que define o que sera inserido na tela

let mode = "caracteres";

// mudança de modo (entre contagem de caracteres e palavras)

button.addEventListener("click", () => {
  if (mode === "caracteres") {
    mode = "words";
    button.textContent = "Contar caracteres";
  } else {
    mode = "caracteres";
    button.textContent = "Contar palavras";
  }
  // dispara um evento de contar palavras
  input.dispatchEvent(new Event("input"));
});

// contagem de caracteres

input.addEventListener("input", () => {
  // variavel de contagem

  let count = 0;
  if (mode === "caracteres") {
    // conta a quantidade de digito no input
    count = input.value.length;
    //  exibi o contagem de caracteres da div o caracteres
    counter.textContent = `${count} caractere(s)`;
  } else {
    // contar palavras
    const words = input.value.trim().split(/\s+/);

    // contagem de elementos
    //   para nao contar palavras quando estiver vazio
    count = input.value.trim() === "" ? 0 : words.length;

    // console.log(words);
    counter.textContent = `${count} palavras(s)`;
  }
});
