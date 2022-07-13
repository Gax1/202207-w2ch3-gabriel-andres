let orderList = [];
let input = 0;


const calculateQueue = (value) => {
  if (input !== 0) {
    input = parseFloat(input);

    addToQueue(input);
  }
  
  let answer = value[0];
  
  let dividedByZero = 0;
  
  for (let i = 2; i < value.length; i = i + 2) {
    switch (orderList[i - 1]) {
      case "+":
        answer += value[i];
        break;
      case "-":
        answer -= value[i];
        break;
      case "/":
        if (value[i] === 0) dividedByZero = 1;
        else answer = answer / value[i];

        break;
      case "*":
        answer = answer * value[i];
        break;
    }
  }

  answer = answer.toFixed(10);
  answer = parseFloat(answer);
  
  if (dividedByZero === 1) {
    clearAll();
    document.getElementById("answer").innerHTML = "ERROR";
  } else {
    document.getElementById("answer").innerHTML = answer;
    input = answer;
    orderList = [];
  }
}

const addToQueue = (input) => {
    orderList.push(input);
}

const clearAll = () => {
  orderList = [];
  input = 0;
  document.getElementById("answer").innerHTML = "0";
}

const numericButton = (key) => {
  if (
    document.getElementById("answer").innerHTML === "ERROR" ||
    (document.getElementById("answer").innerHTML == "0" && key != ".")
  ) {
    document.getElementById("answer").innerHTML = "";
  }

  if (!(key === ".") || !input.match(/[.]/)) {
    input += key;
    document.getElementById("answer").innerHTML += key;
  }
}

const operatorButton = (key) => {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(key);
    document.getElementById("answer").innerHTML += key;
    input = 0;
  }
  if (key == "-" && isNaN(orderList[0]) && input !== "-") {
    input = "-";

    document.getElementById("answer").innerHTML = "-";
  }
}