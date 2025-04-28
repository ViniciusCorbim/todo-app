//--------------------------Create Todo--------------------------\\

//----------------------------------define todo state----------------------------------\\
const todo_input = document.getElementById("todo_input");
const create_todo_state_btn = document.getElementById("create_todo_state_btn");

let todoState = false;
//true = completed
//false = pending

//defines that todo be created as completed
//add the completed class to the input and the div in the todo creation section
create_todo_state_btn.addEventListener("click", () => {
  const div = document.querySelector("button#create_todo_state_btn div");
  div.classList.toggle("completed");
  todo_input.classList.toggle("completed");

  todoState = !todoState;
});
//----------------------------------define todo state----------------------------------\\

/*
<li class="row completed" id="item1">
  <button class="btn-transparent mark_button">
    <div class="circle"></div>
   </button>

  <p>...</p>

  <button class="btn-transparent delete_button">
    <img src="./assets/images/icon-cross.svg" alt="icon-cross" />
  </button>
</li>
*/

const createTodoHtml = (text, id, state = false) => {
  const circleDiv = document.createElement("div");
  circleDiv.classList.add("circle");
  circleDiv.classList.toggle("completed", state);

  const markButton = document.createElement("button");
  markButton.classList.add("btn-transparent");
  markButton.classList.add("mark_button");
  markButton.setAttribute("aria-label", "Mark button");
  markButton.appendChild(circleDiv);
  markButton.addEventListener("click", markTodo);

  const p = document.createElement("p");
  p.innerText = text;

  const crossImg = document.createElement("img");
  crossImg.src = "./assets/images/icon-cross.svg";
  crossImg.setAttribute("alt", "icon-cross");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-transparent");
  deleteButton.classList.add("delete_button");
  deleteButton.setAttribute("aria-label", "delete button");
  deleteButton.appendChild(crossImg);
  deleteButton.addEventListener("click", deleteTodo);

  const li = document.createElement("li");
  li.classList.add("row");
  li.classList.toggle("completed", state);
  li.setAttribute("id", id);
  li.setAttribute("draggable", "true");

  li.appendChild(markButton);
  li.appendChild(p);
  li.appendChild(deleteButton);

  const ul = document.querySelector("#section_todo_list ul");
  ul.appendChild(li);

  sortable();
  hideIconCross();
  printItemsLeft();
};

todo_input.addEventListener("keypress", function (e) {
  if (e.key !== "Enter" || todo_input.value == "") return;

  const text = todo_input.value;
  const id = "item" + (getElementTodo().all.length + 1);
  createTodoHtml(text, id, todoState);

  todo_input.value = "";
  setVisibleTodo(visibleTodo);

  setItem(getTodoList());
});

//--------------------------end Create Todo--------------------------\\
