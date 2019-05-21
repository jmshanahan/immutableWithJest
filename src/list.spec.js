import { Map, List } from 'immutable';
import { Todo, addTodo } from './index';
import { addTodoToList } from './list';
import { each, range } from 'lodash';

describe('Differences between the Immutable Map and List', () => {
  test('Should find same todo in List and Map', () => {
    const todo = new Todo('Todo 1');
    let todoMap = Map();
    todoMap = addTodo(todoMap, todo);
    let todoList = List();
    todoList = addTodoToList(todoList, todo);
    expect(todoMap.get(todo.id)).toBe(todo);
    expect(todoList.get(0)).toBe(todo);
  });
  test('Should create a list', () => {
    const todoItems = ['Milk', 'Egges', 'Detergent', 'Bread', 'Steak'];
    // let todoList = List.of('Milk', 'Egges', 'Detergent', 'Bread', 'Steak');
    let todoList = List.of(...todoItems);
    let count = 0;
    each(todoItems, item => {
      expect(todoList.get(count)).toEqual(item);
      count++;
    });
  });
});
