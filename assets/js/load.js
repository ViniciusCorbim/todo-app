const getItem = () => {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  let defaultList = [
    { text: "Complete Online JavaScript course", state: true },
    { text: "Jog around the park 3x", state: false },
    { text: "10 minutes meditation", state: false },
    { text: "Read for 1 hour", state: false },
    { text: "Pick up groceries", state: false },
    {
      text: "Complete Todo App on Frontend Mentor",
      state: false,
    },
  ];

  if (todoList == null) return defaultList;
  return todoList;
};

function load() {
  let todoList = getItem();
  let id = 0;

  todoList.map((todo) => {
    id++;
    createTodoHtml(todo.text, "item" + id, todo.state);
  });

  //load theme
  if (localStorage.getItem("theme") == "light") changeTheme();
}
load();
