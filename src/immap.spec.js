import { Map } from 'immutable';
import { createMap, createArrayMap } from './immap';

describe.skip('Basic Map() tests', () => {
  test('A simple test map ', () => {
    const data = createMap();

    const map = Map(data);
    expect(map.get('1')).toBe('one');
  });
  test('A array test map ', () => {
    const map = Map(createArrayMap());
    expect(map.get('todos').tomorrow).toBe('do shopping');
    expect(map.get('todos').todo).toBe('get the bread');
    expect(map.get('dones').done).toBe('milked cows');
  });
  test('egghead sample', () => {
    const map = Map([
      ['todo1', { title: 'Todo 1' }],
      ['todo2', { title: 'Todo 2', name: 'Joe' }]
    ]); // Note the array within array

    expect(map.get('todo1').title).toBe('Todo 1');
    expect(map.get('todo2').name).toBe('Joe');
  });
});
