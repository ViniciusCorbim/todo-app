//Drag and Drop to Reorder in Computer
let dragged = null;

function sortable() {
  const elementTodo = getElementTodo().all;
  elementTodo.map((i) => {
    i.addEventListener("dragstart", dragStart);
    i.addEventListener("dragenter", dragEnter);
    i.addEventListener("dragend", dragEnd);

    i.addEventListener("touchstart", touchStart);
    i.addEventListener("touchmove", touchMove);
    i.addEventListener("touchend", touchEnd);
  });
}
sortable();

//Drag and Drop to Reorder List in Computer
function dragStart() {
  dragged = this;
}
function dragEnter() {
  let draggedPos = Number.parseInt(this.id.substr(4));
  let droppedPos = Number.parseInt(dragged.id.substr(4));

  if (draggedPos > droppedPos) this.parentNode.insertBefore(this, dragged);
  if (draggedPos < droppedPos) this.parentNode.insertBefore(dragged, this);

  [dragged.id, this.id] = [this.id, dragged.id];
}

function dragEnd() {
  // console.log("soltou");
}

//Drag and Drop to Reorder List in Phone
let ThisMinY = null;
let ThisMaxY = null;
let currentY = null;

function touchStart(e) {
  document.body.style.overflow = "hidden";

  thisMinY = this.getBoundingClientRect().y;
  thisMaxY = thisMinY + this.getBoundingClientRect().height;
}

function touchMove(e) {
  currentY = e.changedTouches[0].clientY;

  //first todo dragged up or last todo dragged down
  let length = getElementTodo().all.length - 1;
  let condition1 = currentY < ThisMinY && this === getElementTodo().all[0];
  let condition2 = currentY > ThisMaxY && this === getElementTodo().all[length];
  if (condition1 || condition2) return;

  //swap the current todo with the task above
  if (currentY > ThisMaxY) {
    let numberItem = Number.parseInt(this.id.substr(4));
    let nextSibling = document.getElementById("item" + (numberItem + 1));

    this.parentNode.insertBefore(nextSibling, this);
    [nextSibling.id, this.id] = [this.id, nextSibling.id];
  }

  //swap the current todo with the task below
  if (currentY < ThisMinY) {
    let numberItem = Number.parseInt(this.id.substr(4));
    let previousSibling = document.getElementById("item" + (numberItem - 1));

    let ul = document.querySelector("#section_todo_list ul");
    ul.insertBefore(previousSibling, this.nextSibling);

    [previousSibling.id, this.id] = [this.id, previousSibling.id];
  }

  ThisMinY = this.getBoundingClientRect().y;
  ThisMaxY = ThisMinY + this.getBoundingClientRect().height;
  currentY = e.changedTouches[0].clientY;
}

function touchEnd() {
  document.body.style.overflow = null;
}
