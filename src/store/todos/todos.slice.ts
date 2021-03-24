import { createSlice } from '@reduxjs/toolkit';
import { todosInitialState } from './todos.initialState';
import { todosReducer } from './todos.reducer';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: todosReducer
});

export const {
  actions: {
    create: createTodoActionCreator
  },
} = todosSlice;