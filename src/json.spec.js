import { each, range } from 'lodash';
import { addTodo } from './index';
import { Map, List, fromJS } from 'immutable';

describe('Using fromJS to convert Plain Javascript Objects into Immutable data', () => {
  test('Should create a deeply nested map', () => {
    const plainJSObject = {
      title: 'Go to grocery store',
      text: 'I need milk and egges',
      completed: false,
      category: { title: 'House duties', priority: 10 }
    };
    const immutableTodos = fromJS(plainJSObject);
    expect(Map.isMap(immutableTodos));
    expect(immutableTodos.getIn(['category', 'title'])).toEqual('House duties');
    expect(immutableTodos.getIn(['title'])).toEqual('Go to grocery store');
  });
  test('Should create a deeply nested list', () => {
    const plainJSArray = [
      'Go to grocery store',
      'I need milk and egges',
      'Help kids with homework',
      ['buy lemons', 'make cake']
    ];

    const immutableTodoList = fromJS(plainJSArray);
    expect(List.isList(immutableTodoList));
    expect(immutableTodoList.getIn([3, 0])).toEqual('buy lemons');
  });
  test('Should use a reviver to generate a Map', () => {
    const plainJSArray = [
      'Go to grocery store',
      'I need milk and egges',
      'Help kids with homework',
      ['buy lemons', 'make cake']
    ];

    const immutableTodoList = fromJS(plainJSArray, (key, value) => {
      return value.toMap();
    });
    expect(Map.isMap(immutableTodoList));
    expect(immutableTodoList.getIn([3, 1])).toEqual('make cake');
  });
});
