import { Box, Container } from '@mui/material';
import TaskBar from '../../components/toDo/taskBar/TaskBar';
import TaskForm from '../../components/toDo/taskForm/TaskForm';
import TaskList from '../../components/toDo/taskList/TaskList';

const ToDoList = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}
    >
      <Box sx={{ width: '700px' }}>
        <TaskBar />
        <TaskForm />
        <TaskList />
      </Box>
    </Container>
  );
};

export default ToDoList;
