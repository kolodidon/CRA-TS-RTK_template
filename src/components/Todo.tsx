import React, { FC } from 'react'
import { ITodo } from '../../type'

interface ITodoProps {
  key: string;
  todo: ITodo
}

const Todo: FC<ITodoProps> = ({ key, todo }) => <li>{todo.desc}</li>
export default Todo