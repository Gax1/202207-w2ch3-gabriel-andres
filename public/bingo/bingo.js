let count = 0;
let bingoCard = [];
let calledNumbers = [];
const playersRanking = [{name: `Gabriel`, points: 100,}, {name: `Natalia`, points: 97},]

const welcome = () => {
    let player = prompt(`Welcome to the bingo, whats youre name?`);
while(!player || player === " " || Number(player)){
   player = prompt(`Please introduce youre name properly!`)
}
console.log(`Welcome ${player} we wish you good luck!`);
console.table(playersRanking);
console.log(`If you complete the card in 15 turn you will have 100 points! For every other turn, you will lose one point`); 
return player;
};

const generateCard = () =>{
    bingoCard = [];
    let numbersCollection = [];
    do{
        const randomNumber = Math.floor(Math.random() * 20 - 1 ) + 1;
        if(!numbersCollection.includes(randomNumber)){
            numbersCollection.push(randomNumber);
        }}while(numbersCollection.length < 15);
        let colum1 = numbersCollection.splice(10, 5);
        let colum2 = numbersCollection.splice(5, 5);
        let colum3 = numbersCollection.splice(0, 5);
        bingoCard.push(colum1, colum2, colum3);
        likeCard();
};

const likeCard = () =>{
    let likedCard;
    console.table(bingoCard);
    do{
        likedCard = prompt(`Do you like your card?`)
    }while(!likedCard || likedCard.toLowerCase() !== `yes` && likedCard.toLowerCase() !== `no`);
    if(likedCard.toLowerCase() === `no`){
        generateCard();
    }else{
        return likedCard;
    }
}

const call = () => {
    let numberCall = Math.floor(Math.random() * 20 - 1) + 1;
    if(calledNumbers.includes(numberCall)){
        call();
        return;
    };
    count++;
    calledNumbers.push(numberCall);
    for( let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i].includes(numberCall)){
            let indexOfCalledNUmber = bingoCard[i].indexOf(numberCall);
            bingoCard[i][indexOfCalledNUmber] = `X`;
            break;
        }
};
};

const checkForLines = () =>{
    for(let i = 0; i < bingoCard.length; i++){
        let checkIt = bingoCard[i].every(check => check === `X`)
        if(checkIt){
            bingoCard[i] = [`LINE!`];
            console.log(`Line!!!!`)
        }
}
};

const checkForBingo =() => {
    let itin = 0;
    for(let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i].includes(`LINE!`)){
            itin++;
        }
        if(itin === 3){
            console.log(`Bingo!!!! You just won the game!`)
            return true;
        }
    }
    return false;
};

const point = (playerName) => {
    const playerPoints = Math.round(115 - count);
    if(count < 15){
        return;
    }
    console.log(`Youre points are ${playerPoints}! Congratulations ${playerName}`);
    playersRanking.push({
        name: playerName,
        points: playerPoints,
    })
    playersRanking.sort((a, b) => a.points - b.points);
};


const bingo = () =>{
    let bingoWin = checkForBingo();
    if(bingoWin){
        return;
    }
    let newRound = window.confirm(`You want to play a new round?`);
    if(newRound){
        call();
        console.log(`The number of this round was: ${calledNumbers.slice(-1)}`);
        checkForLines();
            console.table(bingoCard);
            bingo();

        }
};


const goodBye = (ranking) =>{
    console.log(`Bye! Thanks for playing Bingo!!`);
    console.log(`This are the tops scores:`)
    console.table(ranking);
};

const execute = () =>{
    bingoCard = [];
    count = 0;
    calledNumbers = [];
    let player = welcome();
    generateCard();
    bingo();
    point(player);
    let playAgain = window.confirm(`Do you want to play again?`)
    if(playAgain){
        
        execute();
    }
    goodBye(playersRanking);

};
execute();




    
    

