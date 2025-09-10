

const getNum1 = () => {
  const num1 = Number.parseInt(document.getElementById("num1").value);
  return num1;
};

const getNum2 = () => {
  const num2 = Number.parseInt(document.getElementById("num2").value);
  return num2;
};

let getOperator = null;

function setOperator(opSymbol) {
  getOperator = function () {
    return opSymbol;
  };
}

// add functionality

function equation() {
  const num1 = getNum1();
  const num2 = getNum2();
  const operator = getOperator ? getOperator() : null;

  let result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    default:
        result = "Invalid operator";
      break;
  }
  console.log(num1, num2, operator, result);
  showResult(result);
}

function showResult(result) {
  // console.log(result);
  const resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML = result;
}

function reset() {
    getOperator = null;
    console.log(getOperator);
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    document.getElementById("result").innerHTML = "";
}
