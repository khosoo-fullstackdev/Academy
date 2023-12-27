const width = 40;
const height = 40;
let direction = "left";
let snakePos = [
  [20, 20],
  [20, 21],
  [21, 21],
  [21, 22],
  [22, 22],
];
let multiArr = [];
for (let i = 0; i < width; i++) {
  let row = [];
  for (let j = 0; j < height; j++) {
    row.push(j);
  }
  multiArr.push(row);
}
const root = document.getElementById("root");

function drawInterface() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  for (let i = 0; i < multiArr.length; i++) {
    for (let j = 0; j < multiArr[i].length; j++) {
      const newBox = document.createElement("div");
      newBox.setAttribute("class", "box");
      newBox.setAttribute("id", `${i}-${j}`);
      container.appendChild(newBox);
    }
  }
  const startButton = document.createElement("button");
  startButton.classList.add("startbtn");
  startButton.innerText = "Start";
  startButton.addEventListener("click", startGame);
  const stopButton = document.createElement("button");
  stopButton.classList.add("stopbtn");
  stopButton.innerText = "Stop";
  stopButton.addEventListener("click", stopGame);
  root.appendChild(startButton);
  root.appendChild(stopButton);
  root.appendChild(container);
}
drawInterface();
function drawSnake(snakePos) {
  for (let i = 0; i < snakePos.length; i++) {
    document
      .getElementById(`${snakePos[i][0]}-${snakePos[i][1]}`)
      .classList.add("active");
  }
  document
    .getElementById(
      `${snakePos[snakePos.length - 1][0]}-${snakePos[snakePos.length - 1][1]}`
    )
    .classList.remove("active");
  //   document
  //     .getElementById(`${snakePos[0][0]}-${snakePos[0][1]}`)
  //     .classList.add("head");
}
let interval;
function startGame() {
  drawSnake(snakePos);
  interval = setInterval(() => {
    moveSnake(snakePos);
    drawSnake(snakePos);
  }, 500);
}

function stopGame() {
  clearInterval(interval);
}
function moveSnake(pos) {
  console.log(pos);
  let newSnakePos = [];
  switch (direction) {
    case "left":
      newSnakePos = [[pos[0][0], pos[0][1] - 1]];
      for (let i = 0; i < pos.length - 1; i++) {
        newSnakePos.push(pos[i]);
      }
      console.log({ newSnakePos });
      snakePos = newSnakePos;
      break;
    case "right":
      newSnakePos = [[pos[0][0], pos[0][1] + 1]];
      for (let i = 0; i < pos.length - 1; i++) {
        newSnakePos.push(pos[i]);
      }
      console.log({ newSnakePos });
      snakePos = newSnakePos;
      break;
    case "up":
      newSnakePos = [[pos[0][0] - 1, pos[0][1]]];
      for (let i = 0; i < pos.length - 1; i++) {
        newSnakePos.push(pos[i]);
      }
      console.log({ newSnakePos });
      snakePos = newSnakePos;
      break;
    case "down":
      newSnakePos = [[pos[0][0] + 1, pos[0][1]]];
      for (let i = 0; i < pos.length - 1; i++) {
        newSnakePos.push(pos[i]);
      }
      console.log({ newSnakePos });
      snakePos = newSnakePos;
      break;
  }
}
let str;
document.onkeydown = function (e) {
  switch (e.code) {
    case "ArrowUp":
      if (direction !== "down") direction = "up";
      break;
    case "ArrowDown":
      if (direction !== "up") direction = "down";
      break;
    case "ArrowRight":
      if (direction !== "left") direction = "right";
      break;
    case "ArrowLeft":
      if (direction !== "right") direction = "left";
      break;
  }
  console.log(str);
};
