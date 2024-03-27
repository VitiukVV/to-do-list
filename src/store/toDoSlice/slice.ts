import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';
import { Todo } from '../../interface/interface';

const toDoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.tasks.push(action.payload);
      },
      prepare(title: string, description: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            status: 'pending',
          },
        };
      },
    },
    deleteToDo(state, action: PayloadAction<{ id: string }>) {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    patchToDo(state, action: PayloadAction<Partial<Todo>>) {
      const { id, title, description } = action.payload;
      const todoToUpdate = state.tasks.find(todo => todo.id === id);
      if (todoToUpdate) {
        if (title !== undefined) {
          todoToUpdate.title = title;
        }
        if (description !== undefined) {
          todoToUpdate.description = description;
        }
      }
    },
    // patchToDo(state, action: PayloadAction<Partial<Todo>>) {
    //   const index = state.tasks.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.tasks[index] = action.payload;
    //   }
    // },
    changeStatusTask(
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) {
      const { id, status } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.status = status;
      }
    },
    setStatusFilter(state, action) {
      state.filters.status = action.payload;
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  patchToDo,
  changeStatusTask,
  setStatusFilter,
} = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;
