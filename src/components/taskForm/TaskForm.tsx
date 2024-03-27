import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addToDo } from '../../store/toDoSlice/slice';

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    switch (name) {
      case 'title':
        setTaskTitle(e.target.value);
        break;
      case 'description':
        setTaskDescription(e.target.value);
        break;
      default:
        console.error(`Unhandled input name: ${name}`);
        break;
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addToDo(taskTitle, taskDescription));
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ flexGrow: 1 }}
        autoComplete="off"
        label="Enter task title"
        name="title"
        value={taskTitle}
        onChange={handleInputChange}
        type="text"
        required
      />
      <TextField
        sx={{ flexGrow: 1 }}
        autoComplete="off"
        label="Enter task text"
        name="description"
        value={taskDescription}
        onChange={handleInputChange}
        type="text"
        required
      />
      <Button variant="contained" type="submit">
        Add task
      </Button>
    </Box>
  );
};

export default TaskForm;
