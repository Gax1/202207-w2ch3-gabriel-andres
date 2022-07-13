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
function execute(){
    welcome();
    showFlights();
    const role = askForRole();
    if(role === `admin`) {
        const task = taskSelection();
        if(task === `create`){
            create();
        }else{
            delet()

        }
    }else{
        user()
    }
};
function welcome(){
    let name = prompt(`Welcome to Skylab Airlines, please introduce youre name.`);
    if(name === null || name === `` || name === ` ` || Number(name)){ 
        let name = `anonymous`;
    console.log(`Welcome ${name} we are eager to fly with you!!`);
} else{
    console.log(`Welcome ${name} we are eager to fly with you!!`);
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
};
function askForRole(){
    let role;
    do{
        role = prompt(`Introduce if youre admin or user.`);
        }while(role === null || role.toLowerCase() !== `admin` && role.toLocaleLowerCase() !== `user`);
        return role.toLocaleLowerCase();
};

function taskSelection(){
    let task = prompt(`Do you want to createa flight (create) or delete a flight (delete)?`);
    while(task === null || task.toLowerCase() !== `create` && task.toLowerCase() !== `delete`){
        task = prompt(`You introduced an invalid task, please introdue create or delete`)
    }
    return task.toLowerCase()
}


function create(){
    let newFlight = {};
    if(flights.length < 15){
        let scale = prompt(`The flight have any scale? (y/n)`);
        while(scale === null || scale.toLowerCase() !== `y` && scale.toLowerCase() !== `n`){
            scale = prompt(`You had introduced an invalid value, please continue with y or n`)
        }if(scale.toLowerCase() === `y`){
            scale = true;
        }else{
            scale = false;
        }
        newFlight.id = flights.length + 2;
        newFlight.to = prompt(`to?`);
        newFlight.from = prompt(`from?`);
        newFlight.cost = +prompt(`cost?`);
        newFlight.scale = scale;
        flights.push(newFlight);
        flights.forEach((flight) => console.log(`The id of the flight to ${flight.to} is ${flight.id}`));
        }else{
            alert(`We had registred all the flights for today, try again tomorrow!`)
        }

        let newCreate = prompt(`Do you want to create a new flight? (y/n)`);
        while(newCreate === null || newCreate.toLowerCase() !== `y` && newCreate.toLowerCase() !== `n`){
            newCreate = prompt(`You had introduced an invalid number, please continue with y or n`)
        }if(flights.length < 15 && newCreate.toLowerCase() === `y`){
            create()
        }
        else{
            alert(`Is no possible to create new flights`)
        }
}

function delet(){
    let id = +prompt(`Introduce the id of the flight you want to delete`);
        while(id > flights.length + 2){
            id = +prompt(`You had introduced an unknown id, please introduce and id beetween 0-${flights.length + 2}`)
        };
        let flightsWithout = flights.filter((flight) => flight.id !== id);
        return flights = flightsWithout;
    };
    function user(){
        let ticket = prompt(`How much you want to expend in youre holidays?`);
            while(isNaN(ticket) || ticket === null || ticket === ` ` || ticket === ``){
                ticket = prompt(`Please introduce how much you wanna spend in this trip!`)
            }
        ticket = Number(ticket);
        let availableFlights = flights.filter((flight) => flight.cost <= ticket);
        availableFlights.forEach((flight) => console.log(`You can go to ${flight.to}, for a cost of $${flight.cost} in the flight id ${flight.id}`));
        let ticketSelection = prompt(`Introduce the id of the ticket you want to buy!`);
        while(isNaN(ticketSelection) || ticketSelection === null ||ticketSelection === `` || ticketSelection === ` `){
            ticketSelection = prompt(`Please introduce the id of one of the flights you can afford`);
        }
        ticketSelection = Number(ticketSelection);
        let choosenFlight = availableFlights.filter((flight) => flight.id === ticketSelection);
        choosenFlight.forEach((flight) => console.log(`Thanks for buying the flight to: ${flight.to}, have a lovely day!!`));
    }
    
    

