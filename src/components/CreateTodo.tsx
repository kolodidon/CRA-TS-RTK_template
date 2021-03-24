import React, { FC, FormEvent, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { createTodoActionCreator } from '../store/todos/todos.slice';

interface ICreateTodoProps { }

const CreateTodo: FC<ICreateTodoProps> = () => {
  const dispatch = useDispatch();

  const [newTodoInput, setNewTodoInput] = useState<string>('');

  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newTodoInput.length) return;
    dispatch(createTodoActionCreator({ desc: newTodoInput }));
    setNewTodoInput('');
  };
  
  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoInput(e.target.value);
  };

  return (
    <form onSubmit={handleCreateNewTodo}>
      <label htmlFor="new-todo">Новый пункт: </label>
      <input
        onChange={handleNewInputChange}
        id="new-todo"
        value={newTodoInput}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default CreateTodo