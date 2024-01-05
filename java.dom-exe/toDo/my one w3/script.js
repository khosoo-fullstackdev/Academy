let toDoList = [
  {
    title: "todo",
    desp: "january",
    status: "to do",
    priority: "Low",
  },
  {
    title: "fitness",
    desp: "february",
    status: "stuck",
    priority: "High",
  },
  {
    title: "food",
    desp: "march",
    status: "in progress",
    priority: "Medium",
  },
  {
    title: "home",
    desp: "january",
    status: "done",
    priority: "High",
  },
  {
    title: "jog",
    desp: "february",
    status: "to do",
    priority: "Medium",
  },
  {
    title: "cook",
    desp: "march",
    status: "stuck",
    priority: "Low",
  },
  {
    title: "interview",
    desp: "june",
    status: "to do",
    priority: "High",
  },
  {
    title: "car",
    desp: "march",
    status: "in progress",
    priority: "Medium",
  },
  {
    title: "dentist",
    desp: "april",
    status: "stuck",
    priority: "Medium",
  },
  {
    title: "dance",
    desp: "june",
    status: "done",
    priority: "Low",
  },
];
const root = document.getElementById("root");
const boards = document.createElement("div");
root.appendChild(boards);

boards.setAttribute("class", "boards");
let toDoListDiv = document.createElement("div");
toDoListDiv.setAttribute("class", "to-do");
let inProgList = document.createElement("div");
inProgList.setAttribute("class", "in-progress");
let stuckList = document.createElement("div");
stuckList.setAttribute("class", "stuck");
let doneList = document.createElement("div");
doneList.setAttribute("class", "done");

const addBtn1 = document.createElement("button");
const addBtn2 = document.createElement("button");
const addBtn3 = document.createElement("button");
const addBtn4 = document.createElement("button");

toDoListDiv.setAttribute("class", "board");
inProgList.setAttribute("class", "board");
stuckList.setAttribute("class", "board");
doneList.setAttribute("class", "board");

boards.appendChild(toDoListDiv);
boards.appendChild(inProgList);
boards.appendChild(stuckList);
boards.appendChild(doneList);

const toDoHead = document.createElement("p");
const inProgHead = document.createElement("p");
const stuckHead = document.createElement("p");
const doneHead = document.createElement("p");

toDoListDiv.appendChild(toDoHead);
inProgList.appendChild(inProgHead);
stuckList.appendChild(stuckHead);
doneList.appendChild(doneHead);

toDoHead.setAttribute("class", "header");
inProgHead.setAttribute("class", "header");
stuckHead.setAttribute("class", "header");
doneHead.setAttribute("class", "header");

toDoHead.innerText = "To Do";
inProgHead.innerText = "In progress";
stuckHead.innerText = "Stuck";
doneHead.innerText = "Done";

const drawCard = (list) => {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardDesp = document.createElement("p");
  const cardPrio = document.createElement("p");

  newCard.setAttribute("class", "card");
  cardTitle.setAttribute("class", "titles");
  cardDesp.setAttribute("class", "descriptions");
  cardPrio.setAttribute("class", "prioritys");

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardDesp);
  newCard.appendChild(cardPrio);

  cardTitle.innerText = "Title:" + list.title;
  cardDesp.innerText = "Description:" + list.desp;
  cardPrio.innerText = "Priority:" + list.priority;
  return newCard;
};

function drawBoard(a) {
  let filterdToDoList = a.filter((b) => {
    return b.status == "to do";
  });
  let filteredInProgList = a.filter((b) => {
    return b.status == "in progress";
  });
  let filteredStuckList = a.filter((b) => {
    return b.status == "stuck";
  });
  let filteredDoneList = a.filter((b) => {
    return b.status == "done";
  });
  filterdToDoList.map((c) => {
    card = drawCard(c);
    toDoListDiv.appendChild(card);
  });
  filteredInProgList.map((c) => {
    card = drawCard(c);
    inProgList.appendChild(card);
  });
  filteredStuckList.map((c) => {
    let card = drawCard(c);
    stuckList.appendChild(card);
  });
  filteredDoneList.map((c) => {
    let card = drawCard(c);
    doneList.appendChild(card);
  });
}
drawBoard(toDoList);

function addTask() {
  const addDiv = document.createElement("div");
  const modal = document.createElement("div");
  addDiv.setAttribute("id", "addDiv");
  modal.setAttribute("class", "modal");
  root.appendChild(addDiv);
  addDiv.appendChild(modal);
  const addTitle = document.createElement("p");
  const addCardTitle = document.createElement("p");
  const addCardDesp = document.createElement("p");
  const addCardStatus = document.createElement("p");
  const addCardPrio = document.createElement("p");
  const titleInput = document.createElement("input");
  const despInput = document.createElement("input");
  const statusSelect = document.createElement("select");
  const prioSelect = document.createElement("select");
  modal.appendChild(addTitle);
  modal.appendChild(addCardTitle);
  modal.appendChild(addCardDesp);
  modal.appendChild(addCardStatus);
  modal.appendChild(addCardPrio);
  modal.appendChild(titleInput);
  modal.appendChild(despInput);
  modal.appendChild(statusSelect);
  modal.appendChild(prioSelect);
  modal.appendChild(addTitle);
}
addTask();

// toDoListDiv.appendChild(addBtn1);
// inProgList.appendChild(addBtn2);
// stuckList.appendChild(addBtn3);
// doneList.appendChild(addBtn4);

// let modalDiv = document.getElementById("addDiv");
// addBtn1.onclick = function visibility() {
//   modalDiv.style.display = "block";
// };
// console.log(modalDiv);
