/* eslint-disable no-console */
/* eslint-disable no-alert */

function val() {
  let value1 = prompt(
    "Introduzca un valor o cancelar si no quiere intrudcir un valor."
  );
  while (Number.isNaN(value1) || value1 === " " || value1 === "") {
    value1 = prompt("Error, por favor Introduzca un interger.");
  }
  if (value1 !== null) {
    value1 = Number(value1);
  }
  return value1;
}

const num1 = val();
const num2 = val();
const result = [];

console.log(num1, num2, result[0], result.length);

function cal() {
  let val2 = [];
  if (num1 === null && num2 === null) {
    console.log(
      "Ambos valores introducidos son nulos, por favor intente de nuevo"
    );
  } else if (Number(num1) && num2 === null) {
    val2 = Math.sqrt(num1);
    console.log(`La raiz cuadrada de ${num1}  es ${val2}`);
  } else if (num1 === null && Number(num2)) {
    val2 = Math.sqrt(num2);
    console.log(`La raiz cuadrada de ${num2} es ${val2}`);
  } else if (Number(num1) && Number(num2)) {
    val2.push(num1 + num2);
    val2.push(num1 - num2);
    val2.push(num1 * num2);
    val2.push(num1 / num2);
  }
  return val2;
}
function showResult() {
  console.log(`El resultado de la suma es ${result[0][0]}`);
  console.log(`El resultado de la resta es ${result[0][1]}`);
  console.log(`El resultado de la multiplicacion es ${result[0][2]}`);
  console.log(`El resultado de la division es ${result[0][3]}`);
}

result.push(cal());
if (Number(num1) && Number(num2)) {
  showResult();
}
