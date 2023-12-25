const root = document.getElementById("root");
const calculator = document.createElement("div");
calculator.setAttribute("class", "calculator");
const scrn = document.createElement("div");
const buttons = document.createElement("grid");
root.appendChild(calculator);
calculator.appendChild(scrn);
scrn.setAttribute("class", "screen");
calculator.appendChild(buttons);
buttons.setAttribute("class", "buttons");

function add() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
}
function subtract() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("answer").innerText = sum;
}
function multiply() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("answer").innerText = sum;
}
function divide() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 / num2;
  document.getElementById("answer").innerText = sum;
}
