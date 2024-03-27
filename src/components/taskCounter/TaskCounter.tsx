import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectTasks } from '../../store/toDoSlice/selectors';

const TaskCounter = () => {
  const tasks = useAppSelector(selectTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.status === 'pending') {
        acc.pending += 1;
      } else if (task.status === 'in progress') {
        acc.inProgress += 1;
      } else {
        acc.completed += 1;
      }
      return acc;
    },
    { pending: 0, inProgress: 0, completed: 0 }
  );

  return (
    <Box>
      <Typography>Pending: {count.pending}</Typography>
      <Typography>In progress: {count.inProgress}</Typography>
      <Typography>Completed: {count.completed}</Typography>
    </Box>
  );
};

export default TaskCounter;
