import { ToDoState } from '../../interface/interface';

export const initialState: ToDoState = {
  tasks: [],
  filters: {
    status: 'all',
  },
};
