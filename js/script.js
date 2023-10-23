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
function multiply() {
  // display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
    console.log(5);
  } else if (tempNum !== "") {
    result();
    console.log(10);
  }
  else{
    // do nothing
    console.log(15);
  }
  tempNum = "";
  operator = "multiple";
}
function divide() {
  // display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
    console.log(5);
  } else if (tempNum !== "") {
    result();
    console.log('taghsim');
  }
  else{
    // do nothing
    console.log(15);
  }
  tempNum = "";
  operator = "dividedby";
}
function result() {
  secondNum = tempNum;
  tempNum = "";
  if (operator === "sum") {
    res = +firstNum + +secondNum;
  } else if (operator === "minus") {
    res = +firstNum - +secondNum;
  }
  else if (operator === "multiple" && secondNum !== "") {
    res = +firstNum * +secondNum
  }
  else if (operator === "dividedby" && secondNum !== "") {
    res = +firstNum / +secondNum
  }
  else {
    // do nothing
    console.log(20);
  }
  display.innerHTML = res;
  firstNum = res;
  // console.log(firstNum);
  // console.log(secondNum);
  // console.log(res);

}