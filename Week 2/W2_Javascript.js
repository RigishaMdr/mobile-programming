function showVariables() {
  let name = "Jhonny";
  let age = 25;
  let result = `Name: ${name}<br>Age: ${age}`;
  document.getElementById("variableResult").innerHTML = result;
}

function add() {
  let a = 5, b = 6;
  let c = a + b;
  return `Sum of ${a} + ${b} is ${c}`;
}
function displaySum() {
  document.getElementById("toggleText1").innerHTML = add();
}

function subtract() {
  let a = 2, b = 3;
  let c = a - b;
  return `Difference of ${a} - ${b} is ${c}`;
}
function displaySub() {
  document.getElementById("toggleText2").innerHTML = subtract();
}

function multiply() {
  let a = 2, b = 3;
  let c = a * b;
  return `Product of ${a} × ${b} is ${c}`;
}
function displayMul() {
  document.getElementById("toggleText3").innerHTML = multiply();
}

function divide() {
  let a = 6, b = 3;
  let c = a / b;
  return `Quotient of ${a} ÷ ${b} is ${c}`;
}
function displayDiv() {
  document.getElementById("toggleText4").innerHTML = divide();
}

document.getElementById("checkBtn").addEventListener("click", function() {
  checkNumberSign();
});

function checkNumberSign() {
  let num = Number(document.getElementById("numInput").value);
  let message;

  if (num > 0) {
    message = "The number is Positive ";
  } else if (num < 0) {
    message = "The number is Negative ";
  } else {
    message = "The number is Zero ";
  }

  document.getElementById("result").innerHTML = message;
}