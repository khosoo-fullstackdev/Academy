const root = document.getElementById("root");
const header = document.createElement("p");
header.setAttribute("class", "title");
root.appendChild(header);

const listGroup = document.createElement("div");
root.appendChild(listGroup);

const listAdder = document.createElement("div");
listGroup.appendChild(listAdder);

const listAddName = document.createElement("input");
listAddName.setAttribute("class", "listAddingInput");
listAdder.appendChild(listAddName);

const addButton = document.createElement("button");
addButton.setAttribute("class", "addButton");
listAdder.appendChild(addButton);

const lists = document.createElement("div");
listGroup.appendChild(lists);
