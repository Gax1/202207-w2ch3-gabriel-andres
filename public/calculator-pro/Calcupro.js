/* eslint-disable no-console */
/* eslint-disable no-alert */
const numberArray = [];
const resultados = [];

function newValues() {
  let newValue;
  do {
    newValue = prompt("Introduzca un numero o presione cancelar.");
    if (Number(newValue)) {
      newValue = Number(newValue);
      numberArray.push(newValue);
    } else if (Number.isNaN(newValue) || newValue === " " || newValue === "") {
      alert("Ha introducido un valor equivocado.");
    }
  } while (newValue !== null);
}
function cal() {
  if (numberArray.length === 1) {
    const sqrtResult = Math.sqrt(numberArray[0]).toFixed(3);
    console.log(`La raiz cuadrada de ${numberArray[0]} is ${sqrtResult}`);
  } else if (numberArray.length > 1) {
    const resultSum = numberArray.reduce((a, b) => a + b);
    resultados.push(resultSum);
    const resultRest = numberArray.reduce((a, b) => a - b);
    resultados.push(resultRest);
    const resultMult = numberArray.reduce((a, b) => a * b);
    resultados.push(resultMult);
    const resultDiv = numberArray.reduce((a, b) => a / b);
    resultados.push(resultDiv);
  }
}
function showResult() {
  console.log(
    `El resultado de la suma es: ${resultados[0].toFixed(
      3
    )} la resta es: ${resultados[1].toFixed(
      3
    )} la multiplicacion es: ${resultados[2].toFixed(
      3
    )} la division es: ${resultados[3].toFixed(3)}`
  );
}

function execute() {
  newValues();
  cal();
  if (numberArray.length > 1) {
    showResult();
  }
  // eslint-disable-next-line no-use-before-define
  confirmacion();
}

function confirmacion() {
  const reUse = window.confirm("Quieres volver a usarme?");
  if (reUse) {
    numberArray.length = 0;
    resultados.length = 0;
    execute();
  } else {
    alert("Gracias por usarme, nos vemos en isdi.");
  }
}

execute();
