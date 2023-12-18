function add(){
    let num1= Number(document.getElementById('num1').value)
    let num2= Number(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('answer').innerText=sum;
};
function subtract(){
    let num1= Number(document.getElementById('num1').value)
    let num2= Number(document.getElementById('num2').value);
    let sum = num1 - num2;
    document.getElementById('answer').innerText=sum;
};
function multiply(){
    let num1= Number(document.getElementById('num1').value)
    let num2= Number(document.getElementById('num2').value);
    let sum = num1 * num2;
    document.getElementById('answer').innerText=sum;
}
function divide(){
    let num1= Number(document.getElementById('num1').value)
    let num2= Number(document.getElementById('num2').value);
    let sum = num1 / num2;
    document.getElementById('answer').innerText=sum;
}