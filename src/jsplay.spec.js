import { Todo } from './jsplay';
import { Map } from 'immutable';

describe('joes jsplay.js Map()', () => {
  test.only('constructor', () => {
    const todo = new Todo('Todo 1', "I'm a todo!", false);

    let todos = Map();
    todos.set(todo.id, todo);
    const todo = new Todo('Todo 2', "I'm a todo!", true);
    const newTodo = todos.set(todo.id, todo);

    expect(newTodo.get(todo.id)).toBe(todo);
    expect(todos.size()).toBeEqual(2);
  });
});
