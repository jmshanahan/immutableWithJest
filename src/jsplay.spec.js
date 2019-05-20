import { Todo } from './jsplay';
import { Map } from 'immutable';

describe('joes jsplay.js Map()', () => {
  test.only('constructor', () => {
    const todo = new Todo('Todo 1', "I'm a todo!", false);
    const todo1 = new Todo('Todo 2', "I'm a todo!", true);
    todo.completed = true;
    Object.freeze(todo);
    let map = Map();
    map = map.set(todo.id, todo);
    map = map.set(todo1.id, todo1);

    expect(map.get(todo.id)).toBe(todo);
    expect(map.size).toBe(2);
    // This demonstrates wht toBe is actually doing behind the scenes.
    const objectCompare = Object.is(todo, map.get(todo.id));
    expect(objectCompare).toBeTruthy();
    expect(todo.completed).toBeTruthy();
  });
});
