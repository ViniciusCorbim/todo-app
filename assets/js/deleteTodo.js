//---------------------------------delete todo---------------------------------\\

const getDeleteButtons = () => {
  return [...document.querySelectorAll(".delete_button")];
};

const hideIconCross = () => {
  if ("onmousemove" in window) {
    getDeleteButtons().map((element) => {
      //the button is not normally visible
      element.style.opacity = 0;
    });

    const li = [...document.querySelectorAll("#section_todo_list ul li")];
    li.map((item) => {
      //the button is visible when the mouse is inside the li element
      item.addEventListener("mouseenter", function (e) {
        e.target.lastElementChild.style.opacity = 1;
      });

      //the button becomes invisible again when the mouse leaves the li element
      item.addEventListener("mouseleave", function (e) {
        e.target.lastElementChild.style.opacity = 0;
      });
    });
  }
};
hideIconCross();

//Delete todo
function deleteTodo() {
  this.parentElement.remove();
  printItemsLeft();
}
getDeleteButtons().map((element) => {
  element.addEventListener("click", deleteTodo);
});

//Delete completed todo
function deleteCompletedTodo() {
  getElementTodo().completed.map((e) => {
    e.remove();
  });

  printItemsLeft();
}

const button_clear_completed_todo = document.getElementById(
  "button_clear_completed_todo"
);
button_clear_completed_todo.addEventListener("click", deleteCompletedTodo);

//---------------------------------end delete todo---------------------------------\\
