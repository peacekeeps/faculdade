const mainScreen = document.getElementById("main-screen");
const upperScreen = document.getElementById("upper-screen");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const operationsObj = {
  plus: (x, y) => {
    return x + y;
  },
  minus: (x, y) => {
    return x - y;
  },
  times: (x, y) => {
    return x * y;
  },
  divided: (x, y) => {
    return x / y;
  },
  equal: (x, y) => {
    return x;
  },
};
let equal = true;
let operandX; // It tells the code that there is a number waiting for operandY to calculate

let currentOp = "before";

numbers.forEach(function (number) {
  number.addEventListener("click", (e) => {
    let newNumber = typeNumber(e);
    if (mainScreen.textContent.length <= 16) {
      mainScreen.textContent += newNumber;
    }
  });
});

operations.forEach(function (operation) {
  operation.addEventListener("click", (e) => {
    console.log(e.target.dataset.op);
    mainScreen.textContent = operate(e);
  });
});

function typeNumber(e) {
  if (equal === true) {
    mainScreen.textContent = "";
    upperScreen.textContent = "";
    equal = false;
  }
  return e.target.dataset.num;
}

function operate(e) {
  //Delete numbers
  if (
    e.target.dataset.op === "undo" &&
    mainScreen.textContent > 0 //so it doesnt go on deleting after the screen is clean
    
  ) {
    let str = mainScreen.textContent;
    str = str.slice(0, -1); //gets all chars from 0 index to -1 index (which is end-index - 1)

    return str;
  } else if (e.target.dataset.op === "equal") {
    if (operandX >= 0) {
      if (mainScreen.textContent.length > 0) {
        let operandY = Number(mainScreen.textContent);
        operandX = operationsObj[currentOp](operandX, operandY);
        upperScreen.textContent = `${operandX}`;
        equal = true;
        operandX = 0;
        operandY = 0;
      }
    }
  } else if (e.target.dataset.op !== "undo") {
    // verifica se tem algo digitado na tela antes de realizar operações

    if (operandX >= 0) {
      if (mainScreen.textContent.length > 0) {
        // se tem números na upperScreen

        let operandY = Number(mainScreen.textContent); // número na mainScreen virá o segundo operando

        operandX = operationsObj[currentOp](operandX, operandY); // o número na upperScreen é att para o resultado da operação com o operador anterior(!)

        currentOp = e.target.dataset.op;
        // atualiza o operador com o operador digitado nessa segunda operação. A conta é feita com o operador anterior(!)
        
        upperScreen.textContent = `${operandX} ${e.target.textContent} `;
      } else {
        // se não tem nada na mainScreen, só atualiza o operador

        currentOp = e.target.dataset.op;
        upperScreen.textContent = `${operandX} ${e.target.textContent} `;
      }
    } else {
        // se não tem nada na upperScreen

        currentOp = e.target.dataset.op;
        operandX = Number(mainScreen.textContent);
        upperScreen.textContent += `${operandX} ${e.target.textContent} `;
      } 
  }
}