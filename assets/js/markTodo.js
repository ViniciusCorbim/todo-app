//-----------------------------mark todo-----------------------------\\
const printItemsLeft = () => {
  const items_left_span = document.getElementById("items_left_span");
  items_left_span.innerText = getElementTodo().active.length;
};
printItemsLeft(); //5 items left

function markTodo() {
  let li = this.parentElement; //<li class="row">...</li>
  let div = this.firstElementChild; //<div class="circle">...</div>

  li.classList.toggle("completed");
  div.classList.toggle("completed");

  printItemsLeft();
  setVisibleTodo(visibleTodo);
}

const markTodoButtons = [...document.querySelectorAll(".mark_button")];
markTodoButtons.map((element) => {
  element.addEventListener("click", markTodo);
});
//-----------------------------end mark todo-----------------------------\\
