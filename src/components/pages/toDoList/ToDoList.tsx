import { Box, Container } from '@mui/material';
import TaskBar from '../../taskBar/TaskBar';
import TaskForm from '../../taskForm/TaskForm';
import TaskList from '../../taskList/TaskList';

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
      <Box>
        <TaskBar />
        <TaskForm />
        <TaskList />
      </Box>
    </Container>
  );
};

export default ToDoList;
