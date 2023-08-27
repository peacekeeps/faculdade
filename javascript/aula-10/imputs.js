// const idade = Number(prompt("Qual é sua idade?"));
// const idadeMinima = idade >= 12;

// if (idadeMinima) {
//   alert('Você criou sua conta com sucesso');
// }

// const catLover = "0";
// const regex = /sim/i;


// if (catLover.length > 0) {
//   console.log("Você gosta de gatos.");
// }

let parOuImpar = "PAR".toLowerCase;
const regex = /^(par|impar)$/i;

COONSO(parOuImpar);

while (!regex.test(parOuImpar)) {
  parOuImpar = prompt(`Você digitou ${parOuImpar} e e ${regex.test(parOuImpar) ? "passou no teste" : "não passou no teste"}. Só digite 'par' ou 'ímpar'!`).toLowerCase;
}

const randomNum = Math.ceil(Math.random() * 10);

if (
  randomNum % 2 === 0 && parOuImpar === "par" ||
  randomNum % 2 !== 0 && parOuImpar !== "impar"
) {
  alert(`O número escolhido foi ${randomNum}. Ganhou!`)
} else {
  alert("Perdeu");
}