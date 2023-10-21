// const cars = [
//     'Samand',
//     'Prido',
//     '206',
//     'Quick',
//     'Dena',
//     'Saina',
// ];
// const output = document.getElementById('output');
// let text = ''
// cars.forEach((value,index) => {
//     text = text + cars[index+2] + "<br>";
// })

// // for (let i = 0; i < cars.length; i++) {
// //   text = text + cars[i] + "<br>";
// // }

// output.innerHTML = text
// const cars = [
//     'Samand',
//     'Prido',
//     '206',
//     'Quick',
//     'Dena',
//     'Saina',
// ];
// const output = document.getElementById('output');
// let text = ''
// cars.forEach((value,index) => {
//     text = text + cars[index+2] + "<br>";
// })

// // for (let i = 0; i < cars.length; i++) {
// //   text = text + cars[i] + "<br>";
// // }

// output.innerHTML = text
const display = document.querySelector(".display");
let tempNum = "";
let firstNum, secondNum, operator, res,total,n=0;
function getNum(input) {
  tempNum += input;
  display.innerHTML = tempNum;
}
function sum() {
  if(n==0){
      display.innerHTML = "";
  firstNum = tempNum;
  tempNum = "";
  operator = "sum";
  // console.log(firstNum);
  n++
  console.log(n);
}
  else if(n==1){
    display.innerHTML = ''
    total= +firstNum + +tempNum
    firstNum = ''
    tempNum = ''
    operator = "sum";
    // console.log(firstNum);
    // console.log(total);
    console.log(n);
    n++
  }
  else{    
    display.innerHTML = ''
    total= +total + +tempNum
    tempNum = ''
    operator = "sum";
    // console.log(firstNum);
    // console.log(total);
    console.log(n);
    n++
  }
 
}
function minus () {
  // display.innerHTML = "";
  // firstNum = tempNum;
  // tempNum = "";
  // operator = "minus";
  if(n==0){
    display.innerHTML = "";
firstNum = tempNum;
tempNum = "";
operator = "minus";
// console.log(firstNum);
n++
console.log(n);
}
else if(n==1){
  display.innerHTML = ''
  total= +firstNum - +tempNum
  firstNum = ''
  tempNum = ''
  operator = "minus";
  // console.log(firstNum);
  // console.log(total);
  console.log(n);
  n++
}
else{    
  display.innerHTML = ''
  total= +total - +tempNum
  tempNum = ''
  operator = "minus";
  // console.log(firstNum);
  // console.log(total);
  console.log(n);
  n++
}
}
function multiply () {
  display.innerHTML = "";
  firstNum = tempNum;
  tempNum = "";
  operator = "cross";
}
function result() {
  secondNum = tempNum;
  // tempNum = "";
  if (operator === "sum" && n==1) {
    res = +firstNum + +secondNum}
  else if(operator === "sum" && n>1){
      res = +total + +secondNum
  } 
  else if (operator === "minus" && n==1) {
    res = +firstNum - +secondNum;
  }
  else if(operator === "minus" && n>1){
    res = +total - +secondNum
} 
else if (operator === "cross") {
  res = +firstNum * +secondNum;
}
  display.innerHTML = res;
  console.log(secondNum);
  console.log(res);
}
