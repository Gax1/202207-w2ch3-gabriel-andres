const numberArray = [];
const resultados = [];
execute();
function newValues() {
  let newValue;
  do {
    newValue = prompt("Introduzca un numero o presione cancelar.");
    if (Number(newValue)) {
      newValue = Number(newValue);
      numberArray.push(newValue);
    } else if (isNaN(newValue) || newValue === ` ` || newValue === ``) {
      alert(`Ha introducido un valor equivocado.`);
    }
  } while (newValue !== null);
}
function cal() {
  if (numberArray.length === 1) {
    let sqrtResult = Math.sqrt(numberArray[0]).toFixed(3);
    console.log(`La raiz cuadrada de ${numberArray[0]} is ${sqrtResult}`);
  } else if (numberArray.length > 1) {
    let resultSum = numberArray.reduce((a, b) => a + b);
    resultados.push(resultSum);
    let resultRest = numberArray.reduce((a, b) => a - b);
    resultados.push(resultRest);
    let resultMult = numberArray.reduce((a, b) => a * b);
    resultados.push(resultMult);
    let resultDiv = numberArray.reduce((a, b) => a / b);
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
  confirmacion();
}
function confirmacion() {
  let reUse = window.confirm(`Quieres volver a usarme?`);
  if (reUse) {
    numberArray.length = 0;
    resultados.length = 0;
    execute();
  } else {
    alert(`Gracias por usarme, nos vemos en isdi.`);
  }
}
