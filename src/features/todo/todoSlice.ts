import { createSlice } from "@reduxjs/toolkit";

// todoSlice.ts

export interface Todo {
  key: number;
  name: string;
  isDone: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      key: 1,
      name: "Example with count",
      isDone: true,
    },
    {
      key: 2,
      name: "Example with todo",
      isDone: false,
    },
  ],
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    toggleTodo: (state, action) => {
      console.log(state);
      console.log(action);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.key !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }),
      };
    },
  },
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
