let tasksArr = [
  {
    title: "Task1",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 1,
  },
  {
    title: "Task2",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 2,
  },
  {
    title: "Task3",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 3,
  },
  {
    title: "Task4",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 4,
  },
];

const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const someDiv = document.createElement("div");
root.appendChild(someDiv);

function renderTasks(list) {
  console.log(list);
  container.innerHTML = "";
  const taskTodo = list.filter((todo) => {
    console.log(todo);
    return todo.status === "To Do";
  });

  const todoStatusDiv = document.createElement("div");
  todoStatusDiv.setAttribute("class", "status_column");

  const statusHead = document.createElement("div");
  statusHead.setAttribute("class", "status_head");
  statusHead.innerHTML = "To Do";
  todoStatusDiv.appendChild(statusHead);

  const heatCount = document.createElement("span");
  heatCount.innerHTML = taskTodo.length;
  statusHead.appendChild(heatCount);

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

  const statusHeadP = document.createElement("div");
  statusHeadP.setAttribute("class", "status_head");
  statusHeadP.innerHTML = "In Progress";
  InProgressStatusDiv.appendChild(statusHeadP);

  const heatCountP = document.createElement("span");
  heatCountP.innerHTML = taskInProgress.length;
  statusHeadP.appendChild(heatCountP);

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

function addCard() {
  const addCardBtn = document.createElement("div");
  addCardBtn.addEventListener("click", showAddTask);

  addCardBtn.setAttribute("class", "add_card");
  const addBtnIcon = document.createElement("img");

  addBtnIcon.setAttribute(
    "src",
    `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
  );

  const addText = document.createElement("div");
  addText.innerHTML = "Add card";

  addCardBtn.appendChild(addBtnIcon);
  addCardBtn.appendChild(addText);
  return addCardBtn;
}
let tempIndex; // edit function only

function createTask(task, index) {
  const taskCard = document.createElement("div");
  const todoTitle = document.createElement("h1");
  const todoDescription = document.createElement("span");
  const todoPriority = document.createElement("div");
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  doneBtn.setAttribute("id", `${task.id}`);
  doneBtn.innerText = "D";

  doneBtn.addEventListener("click", (doneOper) => {
    toDoneask(doneOper.target.id);
  });

  deleteBtn.setAttribute("id", `${task.id}`);
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener("click", (event) => {
    deleteTask(event.target.id);
  });

  editBtn.setAttribute("id", `${task.id}`);
  editBtn.innerText = "E";
  editBtn.addEventListener("click", (edit) => {
    editTask(edit.target.id);
  });

  todoTitle.innerText = task.title;
  todoDescription.innerText = task.description;
  todoPriority.innerHTML = task.priority;

  taskCard.setAttribute("class", "task_card");
  taskCard.appendChild(todoTitle);
  taskCard.appendChild(todoDescription);
  taskCard.appendChild(todoPriority);
  taskCard.appendChild(doneBtn);
  taskCard.appendChild(deleteBtn);
  taskCard.appendChild(editBtn);

  return taskCard;
}

function toDoneask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        status: "Done",
      };
    } else {
      return task;
    }
  });
  renderTasks(tasksArr);
}

function deleteTask(id) {
  tasksArr = tasksArr.filter((task) => {
    return task.id != id;
  });
  renderTasks(tasksArr);
}

function editTask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      // Add Task card
      const backDropActive = document.createElement("div");
      backDropActive.setAttribute("id", "backDropActive");
      backDropActive.setAttribute("class", "backdrop_active");
      someDiv.appendChild(backDropActive);
      // backDropActive.addEventListener("click", outSideClick);

      const showAdd = document.createElement("div");
      showAdd.setAttribute("class", "show_addTask");
      backDropActive.appendChild(showAdd);

      const addTaskCard = document.createElement("form");
      showAdd.appendChild(addTaskCard);

      const headAddTask = document.createElement("h1");
      addTaskCard.appendChild(headAddTask);
      headAddTask.innerHTML = "Edit Task";

      // <Title

      const titleDiv = document.createElement("div");
      titleDiv.setAttribute("class", "title_div");
      addTaskCard.appendChild(titleDiv);

      const titleLabel = document.createElement("label");
      titleLabel.setAttribute("class", "title_label");
      titleDiv.appendChild(titleLabel);
      titleLabel.innerText = "Title";

      const titleInput = document.createElement("input");
      titleInput.setAttribute("id", "titleInput1");
      titleInput.setAttribute("class", "title_input");
      titleDiv.appendChild(titleInput);

      titleInput.value = task.title;

      const messFill = document.createElement("span");
      messFill.setAttribute("id", "messFill2");
      messFill.setAttribute("class", "message");
      titleDiv.appendChild(messFill);
      messFill.innerText = "Заавал утга оруулна уу!!!";

      // Title>

      // <Description

      const deskDiv = document.createElement("div");
      deskDiv.setAttribute("class", "desk_div");
      addTaskCard.appendChild(deskDiv);

      const deskLabel = document.createElement("label");
      deskLabel.setAttribute("class", "desk_label");
      deskDiv.appendChild(deskLabel);
      deskLabel.innerText = "Description";

      const deskInput = document.createElement("textarea");
      deskInput.setAttribute("class", "desk_input");
      deskInput.setAttribute("id", "deskInput1");
      deskInput.setAttribute("rows", "5");
      deskInput.setAttribute("cols", "70");
      deskDiv.appendChild(deskInput);

      deskInput.value = task.description;

      const messFill1 = document.createElement("span");
      messFill1.setAttribute("id", "messFill3");
      messFill1.setAttribute("class", "message");
      deskDiv.appendChild(messFill1);
      messFill1.innerText = "Заавал утга оруулна уу!!!";

      // Desctiption>

      // <Status

      const statusDiv = document.createElement("div");
      statusDiv.setAttribute("class", "status_div");
      addTaskCard.appendChild(statusDiv);

      const statusLabel = document.createElement("label");
      statusLabel.setAttribute("class", "status_label");
      statusDiv.appendChild(statusLabel);
      statusLabel.innerText = "Status";

      const statusInput = document.createElement("select");
      statusInput.setAttribute("id", "statusInput1");
      statusInput.setAttribute("class", "status_input");
      statusDiv.appendChild(statusInput);

      statusInput.value = task.status;

      const statusOption1 = document.createElement("option");
      statusOption1.setAttribute("value", "To Do");
      statusOption1.innerHTML = "To do";
      statusInput.appendChild(statusOption1);

      const statusOption2 = document.createElement("option");
      statusOption2.setAttribute("value", "In Progress");
      statusOption2.innerHTML = "In progress";
      statusInput.appendChild(statusOption2);

      const statusOption3 = document.createElement("option");
      statusOption3.setAttribute("value", "Stuck");
      statusOption3.innerHTML = "Stuck";
      statusInput.appendChild(statusOption3);

      const statusOption4 = document.createElement("option");
      statusOption4.setAttribute("value", "Done");
      statusOption4.innerHTML = "Done";
      statusInput.appendChild(statusOption4);

      const messFill2 = document.createElement("span");
      messFill2.setAttribute("class", "message");
      statusDiv.appendChild(messFill2);

      // Status>

      // <Priority

      const proiDiv = document.createElement("div");
      proiDiv.setAttribute("class", "prio_div");
      addTaskCard.appendChild(proiDiv);

      const proiLabel = document.createElement("label");
      proiLabel.setAttribute("class", "prio_label");
      proiDiv.appendChild(proiLabel);
      proiLabel.innerText = "Priority";

      const proiInput = document.createElement("select");
      proiInput.setAttribute("id", "proiInput1");
      proiInput.setAttribute("class", "prio_input");
      proiDiv.appendChild(proiInput);

      proiInput.value = task.priority;

      const priorityOption1 = document.createElement("option");
      priorityOption1.setAttribute("value", "low");
      priorityOption1.innerHTML = "Low";
      proiInput.appendChild(priorityOption1);

      const priorityOption2 = document.createElement("option");
      priorityOption2.setAttribute("value", "Medium");
      priorityOption2.innerHTML = "Medium";
      proiInput.appendChild(priorityOption2);

      const priorityOption3 = document.createElement("option");
      priorityOption3.setAttribute("value", "high");
      priorityOption3.innerHTML = "High";
      proiInput.appendChild(priorityOption3);

      const messFill3 = document.createElement("span");
      messFill3.setAttribute("class", "message");
      proiDiv.appendChild(messFill3);

      // Priority>

      // <Add task button

      const addTaskButton = document.createElement("input");
      addTaskButton.setAttribute("type", "button");
      addTaskButton.setAttribute("class", "addTask_btn");
      addTaskButton.setAttribute("id", "addTask_btn1");
      addTaskButton.value = "Edit task";
      addTaskCard.appendChild(addTaskButton);
      addTaskButton.addEventListener("click", () => {
        pushtaskEdit(id);
      });
      // Add task button>
      // renderTasks(tasksArr);
      // backDropActive.style.display = "flex";
    } else {
      return task;
    }
  });
}

function showAddTask() {
  // Add Task card

  const backDropActive = document.createElement("div");
  backDropActive.setAttribute("id", "backDropActive");
  backDropActive.setAttribute("class", "backdrop_active");
  someDiv.appendChild(backDropActive);
  // backDropActive.addEventListener("click", outSideClick);

  const showAdd = document.createElement("div");
  showAdd.setAttribute("class", "show_addTask");
  backDropActive.appendChild(showAdd);

  const addTaskCard = document.createElement("form");
  showAdd.appendChild(addTaskCard);

  const headAddTask = document.createElement("h1");
  addTaskCard.appendChild(headAddTask);
  headAddTask.innerHTML = "Add Task";

  // <Title

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title_div");
  addTaskCard.appendChild(titleDiv);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("class", "title_label");
  titleDiv.appendChild(titleLabel);
  titleLabel.innerText = "Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "titleInput");
  titleInput.setAttribute("class", "title_input");
  titleDiv.appendChild(titleInput);

  const messFill = document.createElement("span");
  messFill.setAttribute("id", "messFill");
  messFill.setAttribute("class", "message");
  titleDiv.appendChild(messFill);
  messFill.innerText = "Заавал утга оруулна уу!!!";

  // Title>

  // <Description

  const deskDiv = document.createElement("div");
  deskDiv.setAttribute("class", "desk_div");
  addTaskCard.appendChild(deskDiv);

  const deskLabel = document.createElement("label");
  deskLabel.setAttribute("class", "desk_label");
  deskDiv.appendChild(deskLabel);
  deskLabel.innerText = "Description";

  const deskInput = document.createElement("textarea");
  deskInput.setAttribute("class", "desk_input");
  deskInput.setAttribute("id", "deskInput");
  deskInput.setAttribute("rows", "5");
  deskInput.setAttribute("cols", "70");
  deskDiv.appendChild(deskInput);

  const messFill1 = document.createElement("span");
  messFill1.setAttribute("id", "messFill1");
  messFill1.setAttribute("class", "message");
  deskDiv.appendChild(messFill1);
  messFill1.innerText = "Заавал утга оруулна уу!!!";

  // Desctiption>

  // <Status

  const statusDiv = document.createElement("div");
  statusDiv.setAttribute("class", "status_div");
  addTaskCard.appendChild(statusDiv);

  const statusLabel = document.createElement("label");
  statusLabel.setAttribute("class", "status_label");
  statusDiv.appendChild(statusLabel);
  statusLabel.innerText = "Status";

  const statusInput = document.createElement("select");
  statusInput.setAttribute("id", "statusInput");
  statusInput.setAttribute("class", "status_input");
  statusDiv.appendChild(statusInput);

  const statusOption1 = document.createElement("option");
  statusOption1.setAttribute("value", "To Do");
  statusOption1.innerHTML = "To do";
  statusInput.appendChild(statusOption1);

  const statusOption2 = document.createElement("option");
  statusOption2.setAttribute("value", "In Progress");
  statusOption2.innerHTML = "In progress";
  statusInput.appendChild(statusOption2);

  const statusOption3 = document.createElement("option");
  statusOption3.setAttribute("value", "Stuck");
  statusOption3.innerHTML = "Stuck";
  statusInput.appendChild(statusOption3);

  const statusOption4 = document.createElement("option");
  statusOption4.setAttribute("value", "Done");
  statusOption4.innerHTML = "Done";
  statusInput.appendChild(statusOption4);

  const messFill2 = document.createElement("span");
  messFill2.setAttribute("class", "message");
  statusDiv.appendChild(messFill2);

  // Status>

  // <Priority

  const proiDiv = document.createElement("div");
  proiDiv.setAttribute("class", "prio_div");
  addTaskCard.appendChild(proiDiv);

  const proiLabel = document.createElement("label");
  proiLabel.setAttribute("class", "prio_label");
  proiDiv.appendChild(proiLabel);
  proiLabel.innerText = "Priority";

  const proiInput = document.createElement("select");
  proiInput.setAttribute("id", "proiInput");
  proiInput.setAttribute("class", "prio_input");
  proiDiv.appendChild(proiInput);

  const priorityOption1 = document.createElement("option");
  priorityOption1.setAttribute("value", "low");
  priorityOption1.innerHTML = "Low";
  proiInput.appendChild(priorityOption1);

  const priorityOption2 = document.createElement("option");
  priorityOption2.setAttribute("value", "Medium");
  priorityOption2.innerHTML = "Medium";
  proiInput.appendChild(priorityOption2);

  const priorityOption3 = document.createElement("option");
  priorityOption3.setAttribute("value", "high");
  priorityOption3.innerHTML = "High";
  proiInput.appendChild(priorityOption3);

  const messFill3 = document.createElement("span");
  messFill3.setAttribute("class", "message");
  proiDiv.appendChild(messFill3);

  // Priority>

  // <Add task button

  const addTaskButton = document.createElement("input");
  addTaskButton.setAttribute("type", "button");
  addTaskButton.setAttribute("class", "addTask_btn");
  addTaskButton.setAttribute("id", "addTask_btn");
  addTaskButton.value = "Add Task";
  addTaskCard.appendChild(addTaskButton);
  addTaskButton.addEventListener("click", pushtask);

  // Add task button>

  // backDropActive.style.display = "flex";
}

function pushtask() {
  let titleValue = document.getElementById("titleInput").value;
  let descValue = document.getElementById("deskInput").value;
  let statusValue = document.getElementById("statusInput").value;
  let prioValue = document.getElementById("proiInput").value;
  let messFill = document.getElementById("messFill");
  let messFill1 = document.getElementById("messFill1");
  if (titleValue != "" && descValue != "") {
    tasksArr.push({
      title: titleValue,
      description: descValue,
      status: statusValue,
      priority: prioValue,
      id: Math.floor(Math.random() * 100000),
    });
    someDiv.innerHTML = "";
    renderTasks(tasksArr);
  } else {
    messFill.style.display = "flex";
    messFill1.style.display = "flex";
  }
}

function pushtaskEdit(id) {
  console.log(id);
  let titleValue = document.getElementById("titleInput1").value;
  let descValue = document.getElementById("deskInput1").value;
  let statusValue = document.getElementById("statusInput1").value;
  let prioValue = document.getElementById("proiInput1").value;
  let messFill = document.getElementById("messFill2");
  let messFill1 = document.getElementById("messFill3");
  // tasksArr.splice(tempIndex, 1);

  // tasksArr = tasksArr.map((element)=>{
  //   if()
  // })
  console.log(tasksArr);
  // tasksArr = tasksArr.filter((event) => {
  //   console.log(event);
  //   return event.id == id;
  // });
  console.log(tasksArr);
  if (titleValue != " " && descValue != " ") {
    // tasksArr.push({
    //   title: titleValue,
    //   description: descValue,
    //   status: statusValue || " ",
    //   priority: prioValue,
    //   id: Math.floor(Math.random() * 100000),
    // });
    someDiv.innerHTML = " ";
    console.log(tasksArr);
    // renderTasks(tasksArr);
  } else {
    messFill.style.display = "flex";
    messFill1.style.display = "flex";
  }
}
