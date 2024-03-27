import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import Weather from './pages/weather/Weather';

const ToDoList = lazy(() => import('./pages/toDoList/ToDoList'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Weather />} />
        <Route path="/toDo" element={<ToDoList />} />
        <Route path="*" element={<Weather />} />
      </Route>
    </Routes>
  );
};

export default App;
