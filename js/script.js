const display = document.querySelector(".display");
let tempNum = "";
let firstNum, secondNum, operator, res;
function getNum(input) {
  tempNum += input;
  display.innerHTML = tempNum;
}
function sum() {
  display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
  } else {
    result();
  }
  tempNum = "";
  operator = "sum";
}
function minus() {
  display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
  } else {
    result();
  }
  tempNum = "";
  operator = "minus";
}
function result() {
  secondNum = tempNum;
  tempNum = "";
  if (operator === "sum") {
    res = +firstNum + +secondNum;
  } else if (operator === "minus") {
    res = +firstNum - +secondNum;
  }
  display.innerHTML = res;
  firstNum = res;
}