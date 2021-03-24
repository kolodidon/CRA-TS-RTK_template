import { v1 as uuid } from 'uuid';
import { ITodo } from '../../../type';

export const todosInitialState: ITodo[] = [
  {
    id: uuid(),
    desc: 'Развернуть todo на RTK+TS',
    isComplete: false,
  },
];