let num = (Math.round(Math.random() * 100))
console.log(num)
function check(guess) {
    let guess = document.getElementById('number').innerText
    guess = Number(guess)
    if (guess < num){return document.getElementById('text').innerText ='too low'}
    else if (guess > num) {return document.getElementById('text').innerText ='too low'}
    else if (guess == num) return document.getElementById('answer').innerText ="Correct!!!";
    else return document.getElementById('text').innerText ='not a number'
}
function reset(){  
let num = (Math.round(Math.random() * 100))
}