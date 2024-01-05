const root = document.getElementById("root");
let todoArr = [];
let progressArr = [];
let stuckArr = [];
let doneArr = [];

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

// <ToDo Card

const todoCard = document.createElement("div");
todoCard.setAttribute("class", "board");
boards.appendChild(todoCard);

const todoHead = document.createElement("div");
todoHead.setAttribute("class", "card_head");
todoCard.appendChild(todoHead);

const countTodo = document.createElement("span");
countTodo.setAttribute("class", "head_task");
todoHead.appendChild(countTodo);

countTodo.innerText = "To do";

const countTask1 = document.createElement("span");
countTask1.setAttribute("class", "count_task");
todoHead.appendChild(countTask1);

countTask1.innerHTML = todoArr.length;

const statusCardContainerTd = document.createElement("div");
statusCardContainerTd.setAttribute("class", "status_container");
todoCard.appendChild(statusCardContainerTd);

const addButton = document.createElement("div");
addButton.setAttribute("class", "add_btn");
todoCard.appendChild(addButton);
addButton.addEventListener("click", showAddTask);

const addIcon = document.createElement("img");
addIcon.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton.appendChild(addIcon);

const addText = document.createElement("span");
addText.setAttribute("class", "add_text");
addButton.appendChild(addText);
addText.innerHTML = "Add card";

// ToDo Card>

// <In Progress Card

const inProgressCard = document.createElement("div");
inProgressCard.setAttribute("class", "board");
boards.appendChild(inProgressCard);

const progressHead = document.createElement("div");
progressHead.setAttribute("class", "card_head");
inProgressCard.appendChild(progressHead);

const countProgress = document.createElement("span");
countProgress.setAttribute("class", "head_task");
progressHead.appendChild(countProgress);

countProgress.innerHTML = "In Progress";

const countTask2 = document.createElement("span");
countTask2.setAttribute("class", "count_task");
progressHead.appendChild(countTask2);
countTask2.innerHTML = progressArr.length;

const statusCardContainerIp = document.createElement("div");
statusCardContainerIp.setAttribute("class", "status_container");
inProgressCard.appendChild(statusCardContainerIp);

const addButton1 = document.createElement("div");
addButton1.setAttribute("class", "add_btn");
inProgressCard.appendChild(addButton1);
addButton1.addEventListener("click", showAddTask);

const addIcon1 = document.createElement("img");
addIcon1.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton1.appendChild(addIcon1);

const addText1 = document.createElement("span");
addText1.setAttribute("class", "add_text");
addButton1.appendChild(addText1);
addText1.innerHTML = "Add card";

// In Progress Card>

// <Stuck Card

const stuckCard = document.createElement("div");
stuckCard.setAttribute("class", "board");
boards.appendChild(stuckCard);

const stuckHead = document.createElement("div");
stuckHead.setAttribute("class", "card_head");
stuckCard.appendChild(stuckHead);

const countStuck = document.createElement("span");
countStuck.setAttribute("class", "head_task");
stuckHead.appendChild(countStuck);

countStuck.innerHTML = "Stuck";

const countTask3 = document.createElement("span");
countTask3.setAttribute("class", "count_task");
stuckHead.appendChild(countTask3);
countTask3.innerHTML = stuckArr.length;

const statusCardContainerStu = document.createElement("div");
statusCardContainerStu.setAttribute("class", "status_container");
stuckCard.appendChild(statusCardContainerStu);

const addButton2 = document.createElement("div");
addButton2.setAttribute("class", "add_btn");
stuckCard.appendChild(addButton2);
addButton2.addEventListener("click", showAddTask);

const addIcon2 = document.createElement("img");
addIcon2.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton2.appendChild(addIcon2);

const addText2 = document.createElement("span");
addText2.setAttribute("class", "add_text");
addButton2.appendChild(addText2);
addText2.innerHTML = "Add card";

// Stuck Card>

// <Done Card

const doneCard = document.createElement("div");
doneCard.setAttribute("class", "board");
boards.appendChild(doneCard);

const doneHead = document.createElement("div");
doneHead.setAttribute("class", "card_head");
doneCard.appendChild(doneHead);

const countDone = document.createElement("span");
countDone.setAttribute("class", "head_task");
doneHead.appendChild(countDone);

countDone.innerHTML = "Done";

const countTask4 = document.createElement("span");
countTask4.setAttribute("class", "count_task");
doneHead.appendChild(countTask4);
countTask4.innerHTML = doneArr.length;

const statusCardContainerDone = document.createElement("div");
statusCardContainerDone.setAttribute("class", "status_container");
doneCard.appendChild(statusCardContainerDone);

const addButton3 = document.createElement("div");
addButton3.setAttribute("class", "add_btn");
doneCard.appendChild(addButton3);
addButton3.addEventListener("click", showAddTask);

const addIcon3 = document.createElement("img");
addIcon3.setAttribute(
  "src",
  `https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=`
);
addButton3.appendChild(addIcon3);

const addText3 = document.createElement("span");
addText2.setAttribute("class", "add_text");
addButton3.appendChild(addText3);
addText3.innerHTML = "Add card";

// Done Card>

// Function

function showAddTask() {
  // Add Task card

  const backDropActive = document.createElement("div");
  backDropActive.setAttribute("id", "backDropActive");
  backDropActive.setAttribute("class", "backdrop_active");
  root.appendChild(backDropActive);

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
  statusOption1.setAttribute("value", "todo");
  statusOption1.innerHTML = "To do";
  statusInput.appendChild(statusOption1);

  const statusOption2 = document.createElement("option");
  statusOption2.setAttribute("value", "inprogress");
  statusOption2.innerHTML = "In progress";
  statusInput.appendChild(statusOption2);

  const statusOption3 = document.createElement("option");
  statusOption3.setAttribute("value", "stuck");
  statusOption3.innerHTML = "Stuck";
  statusInput.appendChild(statusOption3);

  const statusOption4 = document.createElement("option");
  statusOption4.setAttribute("value", "done");
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
  addTaskButton.addEventListener("click", addTaskToStages);

  // Add task button>

  backDropActive.style.display = "flex";

  function addTaskToStages() {
    switch (statusInput.value) {
      case "todo":
        todoArr.push({
          title: titleInput.value,
          description: deskInput.value,
          priority: proiInput.value,
        });
        // addedTaskContent.innerHTML = "";

        todoArr.map((task) => {
          const addedTaskCard = document.createElement("div");
          addedTaskCard.setAttribute("class", "added_taskCard");

          const statusDoneCheck = document.createElement("div");
          statusDoneCheck.setAttribute("class", "status_todone");
          addedTaskCard.appendChild(statusDoneCheck);

          const taskToDoneBtn = document.createElement("img");
          taskToDoneBtn.setAttribute(
            "src",
            "https://w7.pngwing.com/pngs/405/55/png-transparent-checked-logo-check-mark-green-check-angle-leaf-triangle.png"
          );
          statusDoneCheck.appendChild(taskToDoneBtn);

          // <Added Task content

          const addedTaskContent = document.createElement("div");
          addedTaskContent.setAttribute("class", "added_taskContent");
          addedTaskCard.appendChild(addedTaskContent);

          const addedTaskHead = document.createElement("h4");
          addedTaskHead.setAttribute("class", "added_taskHead");
          addedTaskContent.appendChild(addedTaskHead);

          addedTaskHead.innerHTML = task.title;

          const addedTaskText = document.createElement("p");
          addedTaskText.setAttribute("class", "added_tasktext");
          addedTaskContent.appendChild(addedTaskText);

          addedTaskText.innerText = task.description;

          const priorityBox = document.createElement("div");
          priorityBox.setAttribute("class", "added_taskPrioBox");
          addedTaskContent.appendChild(priorityBox);

          priorityBox.innerHTML = task.priority;

          // Added Task content>

          // <Edit and Delete Button

          const editDeleteBtn = document.createElement("div");
          editDeleteBtn.setAttribute("class", "edit_delete");
          addedTaskCard.appendChild(editDeleteBtn);

          const deleteBtn = document.createElement("div");
          deleteBtn.setAttribute("class", "delete_btn");
          editDeleteBtn.appendChild(deleteBtn);
          deleteBtn.innerHTML = "x";

          deleteBtn.addEventListener("click", deleteCardToDo);

          const editBtn = document.createElement("div");
          editBtn.setAttribute("class", "edit_btn");
          editDeleteBtn.appendChild(editBtn);

          const editImg = document.createElement("img");
          editImg.setAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          );
          editBtn.appendChild(editImg);
          // Edit and Delete Button>
          countTask1.innerHTML = todoArr.length;
          statusCardContainerTd.appendChild(addedTaskCard);

          function deleteCardToDo() {
            addedTaskCard.remove();
            for (let i = 0; i < todoArr.length; i++) {
              todoArr.splice(i, 1);
            }
            countTask1.innerHTML = todoArr.length;
          }
        });
        break;
      case "inprogress":
        progressArr.push({
          title: titleInput.value,
          description: deskInput.value,
          priority: proiInput.value,
        });

        progressArr.map((task) => {
          const addedTaskCard = document.createElement("div");
          addedTaskCard.setAttribute("class", "added_taskCard");

          const statusDoneCheck = document.createElement("div");
          statusDoneCheck.setAttribute("class", "status_todone");
          addedTaskCard.appendChild(statusDoneCheck);

          const taskToDoneBtn = document.createElement("img");
          taskToDoneBtn.setAttribute(
            "src",
            "https://w7.pngwing.com/pngs/405/55/png-transparent-checked-logo-check-mark-green-check-angle-leaf-triangle.png"
          );
          statusDoneCheck.appendChild(taskToDoneBtn);

          // <Added Task content

          const addedTaskContent = document.createElement("div");
          addedTaskContent.setAttribute("class", "added_taskContent");
          addedTaskCard.appendChild(addedTaskContent);

          const addedTaskHead = document.createElement("h4");
          addedTaskHead.setAttribute("class", "added_taskHead");
          addedTaskContent.appendChild(addedTaskHead);

          addedTaskHead.innerHTML = task.title;

          const addedTaskText = document.createElement("p");
          addedTaskText.setAttribute("class", "added_tasktext");
          addedTaskContent.appendChild(addedTaskText);

          addedTaskText.innerText = task.description;

          const priorityBox = document.createElement("div");
          priorityBox.setAttribute("class", "added_taskPrioBox");
          addedTaskContent.appendChild(priorityBox);

          priorityBox.innerHTML = task.priority;

          // Added Task content>

          // <Edit and Delete Button

          const editDeleteBtn = document.createElement("div");
          editDeleteBtn.setAttribute("class", "edit_delete");
          addedTaskCard.appendChild(editDeleteBtn);

          // deleteBtn.addEventListener("click", deleteOper);

          const deleteBtn = document.createElement("div");
          deleteBtn.setAttribute("class", "delete_btn");
          editDeleteBtn.appendChild(deleteBtn);
          deleteBtn.innerHTML = "x";

          deleteBtn.addEventListener("click", deleteCardToDo);

          const editBtn = document.createElement("div");
          editBtn.setAttribute("class", "edit_btn");
          editDeleteBtn.appendChild(editBtn);

          const editImg = document.createElement("img");
          editImg.setAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          );
          editBtn.appendChild(editImg);
          // Edit and Delete Button>
          countTask2.innerHTML = progressArr.length;
          statusCardContainerIp.appendChild(addedTaskCard);

          function deleteCardToDo() {
            addedTaskCard.remove();
            for (let i = 0; i < progressArr.length; i++) {
              progressArr.splice(i, 1);
            }
            countTask2.innerHTML = progressArr.length;
          }
        });

        break;
      case "stuck":
        stuckArr.push({
          title: titleInput.value,
          description: deskInput.value,
          priority: proiInput.value,
        });

        stuckArr.map((task) => {
          const addedTaskCard = document.createElement("div");
          addedTaskCard.setAttribute("class", "added_taskCard");

          const statusDoneCheck = document.createElement("div");
          statusDoneCheck.setAttribute("class", "status_todone");
          addedTaskCard.appendChild(statusDoneCheck);

          const taskToDoneBtn = document.createElement("img");
          taskToDoneBtn.setAttribute(
            "src",
            "https://w7.pngwing.com/pngs/405/55/png-transparent-checked-logo-check-mark-green-check-angle-leaf-triangle.png"
          );
          statusDoneCheck.appendChild(taskToDoneBtn);

          // <Added Task content

          const addedTaskContent = document.createElement("div");
          addedTaskContent.setAttribute("class", "added_taskContent");
          addedTaskCard.appendChild(addedTaskContent);

          const addedTaskHead = document.createElement("h4");
          addedTaskHead.setAttribute("class", "added_taskHead");
          addedTaskContent.appendChild(addedTaskHead);

          addedTaskHead.innerHTML = task.title;

          const addedTaskText = document.createElement("p");
          addedTaskText.setAttribute("class", "added_tasktext");
          addedTaskContent.appendChild(addedTaskText);

          addedTaskText.innerText = task.description;

          const priorityBox = document.createElement("div");
          priorityBox.setAttribute("class", "added_taskPrioBox");
          addedTaskContent.appendChild(priorityBox);

          priorityBox.innerHTML = task.priority;

          // Added Task content>

          // <Edit and Delete Button

          const editDeleteBtn = document.createElement("div");
          editDeleteBtn.setAttribute("class", "edit_delete");
          addedTaskCard.appendChild(editDeleteBtn);

          // deleteBtn.addEventListener("click", deleteOper);

          const deleteBtn = document.createElement("div");
          deleteBtn.setAttribute("class", "delete_btn");
          editDeleteBtn.appendChild(deleteBtn);
          deleteBtn.innerHTML = "x";

          deleteBtn.addEventListener("click", deleteCardToDo);

          const editBtn = document.createElement("div");
          editBtn.setAttribute("class", "edit_btn");
          editDeleteBtn.appendChild(editBtn);

          const editImg = document.createElement("img");
          editImg.setAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          );
          editBtn.appendChild(editImg);
          // Edit and Delete Button>
          countTask3.innerHTML = stuckArr.length;
          statusCardContainerStu.appendChild(addedTaskCard);

          function deleteCardToDo() {
            addedTaskCard.remove();
            for (let i = 0; i < stuckArr.length; i++) {
              stuckArr.splice(i, 1);
            }
            countTask3.innerHTML = stuckArr.length;
          }
        });

        break;
      case "done":
        doneArr.push({
          title: titleInput.value,
          description: deskInput.value,
          priority: proiInput.value,
        });

        doneArr.map((task) => {
          const addedTaskCard = document.createElement("div");
          addedTaskCard.setAttribute("class", "added_taskCard");

          const statusDoneCheck = document.createElement("div");
          statusDoneCheck.setAttribute("class", "status_todone");
          addedTaskCard.appendChild(statusDoneCheck);

          const taskToDoneBtn = document.createElement("img");
          taskToDoneBtn.setAttribute(
            "src",
            "https://w7.pngwing.com/pngs/405/55/png-transparent-checked-logo-check-mark-green-check-angle-leaf-triangle.png"
          );
          statusDoneCheck.appendChild(taskToDoneBtn);

          // <Added Task content

          const addedTaskContent = document.createElement("div");
          addedTaskContent.setAttribute("class", "added_taskContent");
          addedTaskCard.appendChild(addedTaskContent);

          const addedTaskHead = document.createElement("h4");
          addedTaskHead.setAttribute("class", "added_taskHead");
          addedTaskContent.appendChild(addedTaskHead);

          addedTaskHead.innerHTML = task.title;

          const addedTaskText = document.createElement("p");
          addedTaskText.setAttribute("class", "added_tasktext");
          addedTaskContent.appendChild(addedTaskText);

          addedTaskText.innerText = task.description;

          const priorityBox = document.createElement("div");
          priorityBox.setAttribute("class", "added_taskPrioBox");
          addedTaskContent.appendChild(priorityBox);

          priorityBox.innerHTML = task.priority;

          // Added Task content>

          // <Edit and Delete Button

          const editDeleteBtn = document.createElement("div");
          editDeleteBtn.setAttribute("class", "edit_delete");
          addedTaskCard.appendChild(editDeleteBtn);

          const deleteBtn = document.createElement("div");
          deleteBtn.setAttribute("class", "delete_btn");
          editDeleteBtn.appendChild(deleteBtn);
          deleteBtn.innerHTML = "x";

          deleteBtn.addEventListener("click", deleteCardToDo);

          // deleteBtn.addEventListener("click", deleteOper);

          const editBtn = document.createElement("div");
          editBtn.setAttribute("class", "edit_btn");
          editDeleteBtn.appendChild(editBtn);

          const editImg = document.createElement("img");
          editImg.setAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          );
          editBtn.appendChild(editImg);
          // Edit and Delete Button>
          countTask4.innerHTML = doneArr.length;
          statusCardContainerDone.appendChild(addedTaskCard);

          function deleteCardToDo() {
            addedTaskCard.remove();
            for (let i = 0; i < doneArr.length; i++) {
              doneArr.splice(i, 1);
            }
            countTask4.innerHTML = doneArr.length;
          }
        });
        break;
    }
    backDropActive.style.display = "none";
    //draw all divs of every column of todos
  }
}
