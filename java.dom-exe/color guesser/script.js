const root = document.getElementById("root");
const startButton = document.createElement("button");
const gameBody = document.createElement("div");
const header = document.createElement("div");
const score = document.createElement("p");
const chance = document.createElement("p");
header.appendChild(score);
header.appendChild(startButton);
header.appendChild(chance);
header.setAttribute("class", "header");
score.setAttribute("class", "score");
chance.setAttribute("class", "chance");
let count = 0;
let chanceCount = 3;
score.innerText = "Оноо:" + count;
chance.innerText = "Боломж:" + chanceCount;
root.appendChild(header);
gameBody.setAttribute("class", "gamebody");
startButton.setAttribute("class", "startgame");
startButton.innerText = "Start";
root.appendChild(gameBody);
startButton.addEventListener("click", startGame);
function startGame() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  const red = Math.floor(Math.random() * 220) + 35;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const diffrentColor = `rgb(${red - 35},${green},${blue})`;
  const random = Math.floor(Math.random() * 8);
  for (let i = 0; i < 8; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.backgroundColor = randomColor;
    if (i == random) {
      const diffCard = document.createElement("div");
      box.appendChild(diffCard);
      diffCard.setAttribute("class", "card");
      diffCard.addEventListener("click", () => {
        count++;
        score.innerText = "Оноо:" + count;
        console.log(count);
        startGame();
      });
      diffCard.style.backgroundColor = diffrentColor;
    }
    card.addEventListener("click", () => {
      chanceCount--;
      chance.innerText = "Боломж:" + chanceCount;
      if (chanceCount == 0) {
        startGame();
      }
    });
    box.appendChild(card);
  }

  gameBody.innerHTML = "";
  gameBody.appendChild(box);
}
console.log(count);
