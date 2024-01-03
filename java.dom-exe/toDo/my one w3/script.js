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

toDoListDiv.setAttribute("class", "board");
inProgList.setAttribute("class", "board");
stuckList.setAttribute("class", "board");
doneList.setAttribute("class", "board");

boards.appendChild(toDoListDiv);
boards.appendChild(inProgList);
boards.appendChild(stuckList);
boards.appendChild(doneList);

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
