//--------------------------define visible todo--------------------------\\
let visibleTodo = "all";
//all
//completed
//active

const getElementTodo = () => {
  const elementTodo = {
    all: [...document.querySelectorAll("#section_todo_list ul li")],

    completed: [
      ...document.querySelectorAll("#section_todo_list ul li.completed"),
    ],

    active: [...document.querySelectorAll("#section_todo_list ul li")].filter(
      (elemento) => !elemento.classList.contains("completed")
    ),
  };

  return elementTodo;
};

const todo_visible_button = [
  ...document.querySelectorAll("#todo_list_menu .todo_visible_button"),
];

const setVisibleTodo = (state) => {
  const elementTodo = getElementTodo();

  elementTodo["all"].map((element) => {
    element.classList.toggle("notVisible", false);
  });

  if (state == "all") return;
  state = state == "active" ? "completed" : "active";
  //state = "active" -> state = "completed"
  //state = "completed" -> state = "active"

  elementTodo[state].map((element) => {
    element.classList.toggle("notVisible", true);
  });
};

function setSelectedButton() {
  todo_visible_button.map((element) => {
    element.classList.toggle("selected", false);
  });
  this.classList.toggle("selected", true);

  visibleTodo = this.innerText.toLowerCase();
  setVisibleTodo(visibleTodo);
}

todo_visible_button.map((element) => {
  element.addEventListener("click", setSelectedButton);
});
//--------------------------end define visible todo--------------------------\\
