/*1- Un único programa al que le pasarás uno o dos parámetros mediante prompt.
2- Los resultados deberían ser mostrados con 3 decimales como mucho (En caso que hubieran).
3- El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números (Ya sea mostrar un error o volver a pedir que introduzca un número de nuevo).
4- Si el usuario introduce UN solo número, deberá mostrar SOLO su raíz cuadrada.
5- Si introduce DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.
6- Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.*/

const num1 = val();
const num2 = val();
const result = [];
result.push(cal());
if(Number(num1) && Number(num2)){
showResult();
}

function val(){
    let value1 = prompt("Introduzca un valor o cancelar si no quiere intrudcir un valor.");
    while(isNaN(value1) || value1 === " " || value1 === ""){
        value1 = prompt("Error, por favor Introduzca un interger.");
    }
    if(value1 !== null){
        value1 = Number(value1);
    }
    return value1;
}
console.log(num1, num2, result[0], result.length);
function cal(){
    let val2 = [];
    if(num1 === null && num2 === null){
        console.log("Ambos valores introducidos son nulos, por favor intente de nuevo");
    } else if(Number(num1) && num2 === null){
        val2 = Math.sqrt(num1);
        console.log("La raiz cuadrada de " + num1 + " " + "es" + " " + val2);
    } else if(num1 === null && Number(num2)){
        val2 = Math.sqrt(num2);
        console.log("La raiz cuadrada de " + num2 + " " + "es" + " " + val2);
    } else if(Number(num1) && Number(num2)){
        val2.push((num1 + num2));
        val2.push((num1 - num2));
        val2.push((num1 * num2));
        val2.push((num1 / num2));
    }
    return val2;
}
function showResult(){
    console.log("El resultado de la suma es " + result[0][0]);
    console.log("El resultado de la resta es " + result[0][1]);
    console.log("El resultado de la multiplicacion es " + result[0][2]);
    console.log("El resultado de la division es " + result[0][3]);
}
    