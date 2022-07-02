import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1),
        task: action.payload,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },

    updateTodo: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
