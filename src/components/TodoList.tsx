import React, { FC } from 'react'
import { ITodo } from '../../type'
import { Todo } from './'

interface ITodoList {
  todos: ITodo[]
}
const TodoList: FC<ITodoList> = ({ todos }) => {
  return (
    <ul className="App__list">
      <h2>Список дел:</h2>
      {todos &&
        todos.map((todo, i: number) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </ul>
  )
}

export default TodoList