let num = Math.round(Math.random() * 100);
console.log(num);
function check() {
  let guess = Number(document.getElementById("number").value);
  if (guess < num) {
    document.getElementById("text").innerText = "too low";
  } else if (guess > num) {
    document.getElementById("text").innerText = "too high";
  } else if (guess == num) {
    document.getElementById("text").innerText = "Correct!!!";
  } else return (document.getElementById("text").innerText = "not a number");
}
function reset() {
  num = Math.round(Math.random() * 100);
}
