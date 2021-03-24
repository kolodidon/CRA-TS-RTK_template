export interface ITodo {
    id: string;
    desc: string;
    isComplete: boolean;
  }
  
  export interface State {
    todos: Todo[];
  }