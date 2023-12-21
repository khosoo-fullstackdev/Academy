const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
const head = document.createElement("div");
head.setAttribute("class", "head");
let correct = 3;
let lvl = 1;

const startBtn = document.createElement("button");
startBtn.innerText = "Эхлэх";
const score = document.createElement("p");
score.innerText = "Боломж:" + correct;
const level = document.createElement("p");
level.innerText = "Түвшин:" + lvl;
const container = document.createElement("div");
container.setAttribute("class", "container");

head.appendChild(level);
head.appendChild(startBtn);
head.appendChild(score);
container.appendChild(head);
header.appendChild(container);

const gameBody = document.createElement("div");
root.appendChild(header);
gameBody.setAttribute("class", "gamebody");
// container.innerHTML = "";
// container.appendChild(gameBody);
root.appendChild(gameBody);

startBtn.addEventListener("click", startgame);

function block() {
  const cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  const red = Math.floor(Math.random() * 205) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rand = Math.floor(Math.random() * ((2 + lvl) * (lvl + 2) - 1));
  let lvlId = 0;
  let lvlb = 50;
  for (let i = 0; i < 2 + lvl; i++) {
    const block = document.createElement("div");
    block.setAttribute("class", "card");
    block.setAttribute("id", i);
    for (let j = 0; j < 2 + lvl; j++) {
      const block1 = document.createElement("div");
      block1.setAttribute("class", "card1");
      block1.setAttribute("id", lvlId);
      // console.log("lvl:", lvlId, rand);
      if (lvlId == rand) {
        console.log("HI", 50 - lvl * 5);
        block1.style.backgroundColor = `rgb(${
          red - (36 - lvl * 5)
        },${green},${blue})`;
      } else {
        block1.style.backgroundColor = `rgb(${red},${green},${blue})`;
      }
      lvlId++;
      block1.addEventListener("click", (e) => {
        // const clickedColor = e.target.style.backgroundColor;
        const clickedID = e.target.id;
        if (clickedID == rand) {
          lvl++;
          // console.log();
          if (lvl == 8) {
            win();
          } else {
            level.innerText = "Түвшин:" + lvl;
            nextLevel();
          }
        } else {
          correct--;
          if (correct == 0) {
            score.innerText = "Боломж:" + correct;
            lose();
          } else {
            score.innerText = "Боломж:" + correct;
          }
        }
        // console.log(clickedID);
      });
      block.appendChild(block1);
    }
    // console.log("block:", block);
    cards.appendChild(block);
  }
  // console.log("cards:", cards);

  return cards;
}
function startgame() {
  lvl = 1;
  correct = 3;
  score.innerText = "Боломж:" + correct;
  level.innerText = "Түвшин:" + lvl;

  gameBody.innerHTML = "";
  gameBody.appendChild(block());
}
function nextLevel() {
  gameBody.innerHTML = "";
  gameBody.appendChild(block());
}
function lose() {
  gameBody.innerHTML = "Хожигдлоо";
}
function win() {
  gameBody.innerHTML = "Хожлоо";
}
function cardClick(e) {
  console.log(e.target);
}
