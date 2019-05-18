import { Map } from 'immutable';
import createObjTodos from './index';

describe.skip('Creating an Immutable Object Graph with Immutable.js Map()', () => {
  test('should create Map() with matching keys', () => {
    const data = {
      todo1: {
        title: 'Todo 1',
        value: 'Make it happen'
      },
      todo2: {
        title: 'Todo 2',
        value: 'Make it happen'
      }
    };

    const map = Map(data);
    expect(map.get('todo1').title).toBe('Todo 1');
  });

  test('should create Map() with keys from array tuples', () => {
    const map = Map([['todo1', { title: 'Todo 1' }]]); // Note the array within array
    expect(map.get('todo1').title).toBe('Todo 1');
  });

  test('should create Map() with matching size to number of keys', () => {
    const map = Map(createObjTodos(3));
    expect(map.size).toBe(3);
  });
});
