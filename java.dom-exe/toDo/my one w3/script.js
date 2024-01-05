let listArr = [
  {
    title: "car",
    description: "march",
    priority: "medium",
    status: "To Do",
    id: 1,
  },
  {
    title: "ger",
    description: "january",
    priority: "medium",
    status: "In Progress",
    id: 2,
  },
  {
    title: "fitness",
    description: "monthly",
    priority: "high",
    status: "Stuck",
    id: 3,
  },
  {
    title: "NewYear",
    description: "december",
    priority: "low",
    status: "Done",
    id: 4,
  },
];

const root = document.getElementById("root");

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
root.appendChild(boards);

const popUpDiv = document.createElement("div");
root.appendChild(popUpDiv);

function render(list) {
  boards.innerHTML = "";
  const toDoTask = list.filter((arr) => {
    return arr.status === "To do";
  });
  const todoStatusDiv = document.createElement("div");
  todoStatusDiv.setAttribute("class", "status_column");

  const toDoHead = document.createElement("div");
  toDoHead.setAttribute("class", "status_head");
  toDoHead.innerHTML = "To Do";
  todoStatusDiv.appendChild(toDoHead);

  const toDoCount = document.createElement("span");
  toDoCount.innerHTML = toDoTask.length;
  statusHead.appendChild(toDoCount);

  taskTodo.map((task, index) => {
    const newTask = createTask(task, index);

    todoStatusDiv.appendChild(newTask);
    container.appendChild(todoStatusDiv);
  });

  const addCardButton = addCard();
  todoStatusDiv.appendChild(addCardButton);

  const taskInProgress = list.filter((todo) => {
    return todo.status == "In Progress";
  });
  const InProgressStatusDiv = document.createElement("div");
  InProgressStatusDiv.setAttribute("class", "status_column");

  const inProgHead = document.createElement("div");
  inProgHead.setAttribute("class", "status_head");
  inProgHead.innerHTML = "In Progress";
  InProgressStatusDiv.appendChild(inProgHead);

  const inProgCount = document.createElement("span");
  inProgCount.innerHTML = taskInProgress.length;
  statusHeadP.appendChild(inProgCount);

  taskInProgress.map((task) => {
    const newTask = createTask(task);

    InProgressStatusDiv.appendChild(newTask);
    container.appendChild(InProgressStatusDiv);
  });

  const addCardButton1 = addCard();
  InProgressStatusDiv.appendChild(addCardButton1);

  const taskStuck = list.filter((todo) => {
    return todo.status == "Stuck";
  });
  const stuckStatusDiv = document.createElement("div");
  stuckStatusDiv.setAttribute("class", "status_column");

  const statusHeadS = document.createElement("div");
  statusHeadS.setAttribute("class", "status_head");
  statusHeadS.innerHTML = "Stuck";
  stuckStatusDiv.appendChild(statusHeadS);

  const heatCountS = document.createElement("span");
  heatCountS.innerHTML = taskStuck.length;
  statusHeadS.appendChild(heatCountS);

  taskStuck.map((task) => {
    const newTask = createTask(task);

    stuckStatusDiv.appendChild(newTask);
    container.appendChild(stuckStatusDiv);
  });

  const addCardButton2 = addCard();
  stuckStatusDiv.appendChild(addCardButton2);

  const taskDone = list.filter((todo) => {
    return todo.status == "Done";
  });
  const doneStatusDiv = document.createElement("div");
  doneStatusDiv.setAttribute("class", "status_column");

  const statusHeadD = document.createElement("div");
  statusHeadD.setAttribute("class", "status_head");
  statusHeadD.innerHTML = "Done";
  doneStatusDiv.appendChild(statusHeadD);

  const heatCountD = document.createElement("span");
  heatCountD.innerHTML = taskDone.length;
  statusHeadD.appendChild(heatCountD);

  taskDone.map((task) => {
    const newTask = createTask(task);

    doneStatusDiv.appendChild(newTask);
    container.appendChild(doneStatusDiv);
  });

  const addCardButton3 = addCard();
  doneStatusDiv.appendChild(addCardButton3);
}
renderTasks(tasksArr);
