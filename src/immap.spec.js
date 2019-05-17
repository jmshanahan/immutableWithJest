import { Map, toJS } from 'immutable';
import { createMap, createArrayMap } from './immap';

describe('Basic Map() tests', () => {
  test.skip('A simple test map ', () => {
    const data = createMap();
    let map = Map(data);
    expect(map[0].get('todo1')).toBe('one');
  });
  test.skip('A array test map ', () => {
    const data = createArrayMap();
    let map = Map(data);
    expect(map.get('todo1').title).toBe('Todo 1');
  });
  test('egghead sample', () => {
    let map = Map([
      ['todo1', { title: 'Todo 1' }],
      ['todo2', { title: 'Todo 2', name: 'Joe' }]
    ]); // Note the array within array

    expect(map.get('todo1').title).toBe('Todo 1');
    expect(map.get('todo2').name).toBe('Joe');
  });
});
