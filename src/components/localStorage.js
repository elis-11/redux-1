
export const todoInLS = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

export const addTodoInLS = () => {
  const todoStr = localStorage.getItem("todo");

  if (!todoStr) return;

  const todoObj = JSON.parse(todoStr);
  return todoObj;
};

export const deleteTodoInLS = () => {
localStorage.removeItem("todo");
}
