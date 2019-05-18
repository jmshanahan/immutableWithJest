import { each, range } from 'lodash';

const createObjTodos = numTodos => {
  const obj = {};
  each(range(numTodos), index => {
    const todoSequence = String(index + 1);
    obj[`todo ${todoSequence}`] = {
      title: `Todo  ${todoSequence}`,
      value: `Make ${todoSequence} happen`
    };
  });

  return obj;
};
export default createObjTodos;
