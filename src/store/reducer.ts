import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { toDoReducer } from './toDoSlice/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

const toDoPersistReducer = persistReducer(persistConfig, toDoReducer);

export const reducer = {
  tasks: toDoPersistReducer,
};
