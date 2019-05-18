import { each, range } from 'lodash';

const createMap = () => ({ 1: 'one' });
function createArrayMap() {
  const array = new Array(
    new Array('todos', { todo: 'get the bread', tomorrow: 'do shopping' }),

    new Array('dones', { done: 'milked cows' })
  );
  return array;
}

function createMapTodos(numTodos) {
  const obj = {};
  each(range(numTodos), index => {
    const todoSequence = String(index + 1);
    obj[`todo ${todoSequence}`] = {
      title: `Todo ${todoSequence}`,
      value: `Make ${todoSequence} happen`
    };
  });

  return obj;
}

export { createMap, createArrayMap, createMapTodos };
