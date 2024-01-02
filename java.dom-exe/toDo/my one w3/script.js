const root = document.getElementById("root");
const boards = document.createElement("div");
root.appendChild(boards);
boards.setAttribute("class", "boards");
function boardCard() {
  for (let i = 0; i < 4; i++) {
    let board = document.createElement("div");
    const todoElement = document.createElement("span");
    board.appendChild(todoElement);
    todoElement.setAttribute("class", "count");
    todoElement.setAttribute("id", "todo-count");
    boards.appendChild(board);
    board.setAttribute("class", "board");
    if ((i = 1)) {
      let board = document.createElement("div");
      const inProgressElement = document.createElement("span");
      board.appendChild(inProgressElement);
      inProgressElement.setAttribute("class", "count");
      inProgressElement.setAttribute("id", "inprogress-count");
      boards.appendChild(board);
      board.setAttribute("class", "board");
    }
    if ((i = 2)) {
      let board = document.createElement("div");
      const stuckElement = document.createElement("span");
      board.appendChild(stuckElement);
      stuckElement.setAttribute("class", "count");
      stuckElement.setAttribute("id", "stuck-count");
      boards.appendChild(board);
      board.setAttribute("class", "board");
    }
    if ((i = 3)) {
      let board = document.createElement("div");
      const doneElement = document.createElement("span");
      board.appendChild(doneElement);
      doneElement.setAttribute("class", "count");
      doneElement.setAttribute("id", "done-count");
      boards.appendChild(board);
      board.setAttribute("class", "board");
    }
  }
}
boardCard();
