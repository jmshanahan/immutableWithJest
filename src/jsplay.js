export class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this._completed = completed;
  }
  set completed(isCompleted) {
    this._completed = isCompleted;
  }
  get completed() {
    return this._completed;
  }
}
function getTodoTexts(todos) {
  return todos.map(todo => {
    return todo.text;
  });
}
const getCompletedTodos = todos => todos.filter(todos.completed === true);

export { getTodoTexts, getCompletedTodos };
