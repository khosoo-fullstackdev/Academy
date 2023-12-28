const root = document.getElementById("root");
const boards = document.createElement("div");
root.appendChild(boards);
const todoElement = document.createElement("div");
const inProgressElement = document.createElement("div");
const stuckElement = document.createElement("div");
const doneElement = document.createElement("div");

const CardElement = (props) => {
  const { id, title, description, priority, status } = props;

  return `
      <div class="card" draggable="true" data-id=${id}>
        ${
          status === "done"
            ? `<div class="checked"><i class="fas fa-check"></i></div>`
            : `<div class="done" onclick="makeDone('${id}')"><i class="fas fa-check"></i></div>`
        }
        <div class="details">
          <h4>${title}</h4>
          <p>${description}</p>
          <div class="priority">
            ${priority}
          </div>
        </div>
        <div class="actions">
          <div class="done" onclick="remove('${id}')">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="done" onclick="">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    `;
};

let lists = [];
const render = () => {
  todoElement.innerHTML = "";
  inProgressElement.innerHTML = "";
  stuckElement.innerHTML = "";
  doneElement.innerHTML = "";

  let todo = [];
  let inProgress = [];
  let stuck = [];
  let done = [];

  data.forEach((item) => {
    if (item.status === "todo") {
      todo.push(CardElement({ ...item }));
    } else if (item.status === "inprogress") {
      inProgress.push(CardElement({ ...item }));
    } else if (item.status === "stuck") {
      stuck.push(CardElement({ ...item }));
    } else if (item.status === "done") {
      done.push(CardElement({ ...item }));
    }

    let todoCount = (document.createElement("div").innerHTML = todo.length);
    board.appendChild(todoCount);
    let inProgressCount = (document.createElement("div").innerHTML =
      inProgress.length);
    board.appendChild(inProgressCount);
    let stuckCount = (document.createElement("div").innerHTML = stuck.length);
    board.appendChild(stuckCount);
    let doneCount = (document.createElement("div").innerHTML = done.length);
    board.appendChild(doneCount);
  });
  todo.sort((a, b) => {
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = b.priority === "High" ? 3 : b.priority === "Medium" ? 2 : 1;

    return aP - bP;
  });

  inProgress.sort((a, b) => {
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = b.priority === "High" ? 3 : b.priority === "Medium" ? 2 : 1;

    return aP - bP;
  });

  stuck.sort((a, b) => {
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = b.priority === "High" ? 3 : b.priority === "Medium" ? 2 : 1;

    return aP - bP;
  });

  done.sort((a, b) => {
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = b.priority === "High" ? 3 : b.priority === "Medium" ? 2 : 1;

    return aP - bP;
  });

  todo.forEach((item) => {
    todoElement.innerHTML += item;
  });

  inProgress.forEach((item) => {
    inProgressElement.innerHTML += item;
  });

  stuck.forEach((item) => {
    stuckElement.innerHTML += item;
  });

  done.forEach((item) => {
    doneElement.innerHTML += item;
  });
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text", event.target.getAttribute("data-id"));
    });
  });
};
