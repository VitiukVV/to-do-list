import { RootState } from '../store';

export const selectFiltersStatus = (state: RootState) =>
  state.tasks.filters.status;

export const selectTasks = (state: RootState) => state.tasks.tasks;
