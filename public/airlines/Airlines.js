/*1- Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
2- Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función (al final de este Readme, teneis un array con vuelos "inventados".)
3- El usuario visualizará todos los vuelos disponibles de una forma amigable:
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
4- Despues de visualizar todos los vuelos disponibles, el usuario verá el coste medio de los vuelos.
5- También podrá ver cuántos vuelos efectúan escalas.
6- Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
execute();
function welcome(){
    let name = prompt(`Bienvenidos a Skylab Airlines, por favor introduzca su nombre.`);
    if(name === null || name === `` || name === ` ` || Number(name)){ 
        let name = `Anonimo`;
    console.log(`Bienvenido ${name} tenemos muchas ganas de volar contigo!!`);
} else{

    console.log(`Bienvenido ${name} tenemos muchas ganas de volar contigo!!`)

}
};

function showFlights(){
    let flightWithOutScale = flights.filter((flight) => flight.scale === false);
    let flightWithScale = flights.filter((flight) => flight.scale === true);
    flightWithOutScale.forEach((flight) => console.log(`El vuelo con destino a ${flight.to}, parte desde ${flight.from} y tiene un coste de ${flight.cost}. Este vuelo no realiza escalas.`));
    flightWithScale.forEach((flight) => console.log(`El vuelo con destino a ${flight.to}, parte desde ${flight.from} y tiene un coste de ${flight.cost}. Este vuelo realiza escalas.`));
    
    let summ = flights.reduce((a, obj) => {
        return a + obj.cost;
    }, 0);
    console.log(`El promedio de los vuelos es: ${(summ/flights.length).toFixed(2)}`)

    console.log(`El numero de vuelos que hoy hacen escala es de: ${flightWithScale.length}`)

    const ultimosVuelos = flights.slice(-5);
    const ultimosDestinos = ultimosVuelos.map(vuelos => {
        return vuelos.to
    });
console.log(`Los ultimos destinos del dia son: ${ultimosDestinos.toString()}`)
}

function execute(){
    welcome();
    showFlights();
}
