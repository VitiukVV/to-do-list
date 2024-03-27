import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {
  Box,
  CardActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  changeStatusTask,
  deleteToDo,
  patchToDo,
} from '../../store/toDoSlice/slice';
import { Todo } from '../../interface/interface';
import EditTaskForm from '../editTaskForm/EditTaskForm';

interface Props {
  task: Todo;
}

const Task = ({ task }: Props) => {
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState<string>(task.status);
  const [edit, setEdit] = useState(false);

  const editClick = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const handleEdit = (title: string, description: string) => {
    dispatch(patchToDo({ id: task.id, title, description }));
    setEdit(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value);
    dispatch(changeStatusTask({ id: task.id, status: event.target.value }));
  };

  const handleDelete = () => dispatch(deleteToDo({ id: task.id }));

  return (
    <ListItem sx={{ justifyContent: 'space-between', gap: 2 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={status}
          onChange={handleChange}
        >
          <FormControlLabel
            value="pending"
            control={<Radio />}
            label="Pending"
          />
          <FormControlLabel
            value="in progress"
            control={<Radio />}
            label="In progress"
          />
          <FormControlLabel
            value="completed"
            control={<Radio />}
            label="Completed"
          />
        </RadioGroup>
      </FormControl>
      {!edit ? (
        <>
          <Box>
            <Typography>Title: {task.title}</Typography>
            <Typography>Description: {task.description}</Typography>
          </Box>
          <CardActions disableSpacing>
            <IconButton
              edge="end"
              color="info"
              sx={{ mr: 1 }}
              aria-label="editContact"
              onClick={editClick}
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="warning"
              aria-label="delete"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </>
      ) : (
        <EditTaskForm
          handleEdit={handleEdit}
          oldTitle={task.title}
          oldDescription={task.description}
          cancelEdit={cancelEdit}
        />
      )}
    </ListItem>
  );
};

export default Task;
