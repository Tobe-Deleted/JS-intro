console.log("todo list loaded");

const todoes = [];

function addTodo(title) {
  if (title.length === 0) {
    return;
  }
  const newTodo = {
    title: title,
  };

  todoes.push(newTodo);
}

function removeTodoById(id) {}

function updateTodoWithId(id, updatedInfo) {}

console.log(todoes);

addTodo("mince meat");
addTodo("feed sharks");

console.log(todoes);
