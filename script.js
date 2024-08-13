let toDoList = [];

$(document).on("click", "#addTask", () => {
  let task = $("#task").val();
  $("#task").val("");
  addTask(task);
  renderList();
});

const addTask = (task) =>
  toDoList.push({
    title: task,
    isCompleted: false,
  });

const renderList = () => {
  $("#todo_list").empty();
  toDoList.map((task, index) => {
    const title = task.isCompleted
      ? `<strike>${task.title}</strike>`
      : task.title;
    const isChecked = task.isCompleted ? "checked" : "";
    let html = `<div class="todo-item"><input type="checkbox" class="checkbox" data-index="${index}" ${isChecked}><span class="todo-title todo-title-${index}">${title}</span></div>`;
    $("#todo_list").append(html);
  });
};

$(document).on("change", ".checkbox", (event) => {
  const index = $(event.target).data("index");
  toDoList[index].isCompleted = $(event.target).is(":checked");
  renderList();
});
