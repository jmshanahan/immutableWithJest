import { Todo, getTodoTexts, getCompletedTodos } from './jsplay';
import { each, range } from 'lodash';
import { addTodo } from './index';
import { Map } from 'immutable';

describe('joes jsplay.js Map()', () => {
  test('Test get', () => {
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
  test('Test delete', () => {
    const todo = new Todo('Todo 1', "I'm a todo!", false);
    const todo1 = new Todo('Todo 2', "I'm a todo!", true);
    let map = Map();
    map = map.set(todo.id, todo);
    map = map.set(todo1.id, todo1);
    expect(map.size).toBe(2);
    map = map.delete(todo.id, map);
    expect(map.size).toBe(1);
  });
  test('Iterate with map', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, `I'm a todo! ${index}`, false)
      );
    });

    const todoTexts = getTodoTexts(todos);

    // expect(todoTexts.first()).toBe("I'm a todo! 0");
  });
  test('filter map', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, "I'm a todo!", index % 2 == 0)
      );
    });

    //const filteredTodos = getCompletedTodos(todos);
    const completedMap = todos.filter(todo => todo.completed);
    expect(completedMap.size).toBe(5);
  });

  test.only('Should mark as completed', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo('Todo' + index, "I'm a todo!", false));
    });
    todos.forEach(todo => (todo.completed = true));
    const completedMap = todos.filter(todo => todo.completed);
    // todos.first().completed = false;
    expect(completedMap.size).toBe(10);
    expect(todos.first().completed).toBeTruthy();
    expect(todos.every).toBeTruthy();
    // todos.forEach(todo => expect(todo.isCompleted).toBeTruthy());
  });
  test('Group by', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, "I'm a todo!", index % 2 == 0)
      );
    });
    const completedTodos = todos.groupBy(todo => todo.completed);
    expect(completedTodos.get(true).size).toBe(5);
    expect(completedTodos.get(false).size).toBe(5);
  });
  test.only('Slice', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, "I'm a todo!", index % 2 == 0)
      );
    });
    const slicedMap = todos.slice(todos.size - 2, todos.size);
    const lastTodos = todos.takeLast(2);
    expect(slicedMap.size).toEqual(2);
    expect(slicedMap.first().id).toMatch(lastTodos.first().id);

    todos.takeLast(2).forEach(todo => {
      expect(slicedMap.get(todo.id).id).toMatch(todo.id);
    });
  });
});
