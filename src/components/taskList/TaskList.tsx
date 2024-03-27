import { nanoid } from 'nanoid';
import Task from '../task/Task';
import { useAppSelector } from '../../app/hooks';
import {
  selectTasks,
  selectFiltersStatus,
} from '../../store/toDoSlice/selectors';
import { Box, List, Typography } from '@mui/material';
import { Todo } from '../../interface/interface';

interface Props {
  toDos: [Todo] | [];
  statusFilter: string;
}

const getVisibleTasks = ({ toDos, statusFilter }: Props) => {
  switch (statusFilter) {
    case 'pending': {
      return toDos.filter(toDo => toDo.status === 'pending');
    }

    case 'in progress': {
      return toDos.filter(toDo => toDo.status === 'in progress');
    }

    case 'completed': {
      return toDos.filter(toDo => toDo.status === 'completed');
    }

    default: {
      return toDos;
    }
  }
};

const TaskList = () => {
  const toDos = useAppSelector(selectTasks);
  const statusFilter = useAppSelector(selectFiltersStatus);
  const visibleTasks = getVisibleTasks({ toDos, statusFilter });

  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {toDos.length > 0 ? (
        <Typography component="h3" variant="h4">
          Tasks list:
        </Typography>
      ) : (
        <Typography component="h3" variant="h3">
          Your tasks list is empty... Please add task.
        </Typography>
      )}
      {toDos.length > 0 && (
        <List>
          {visibleTasks.length > 0 &&
            visibleTasks.map(task => <Task key={nanoid()} task={task} />)}
        </List>
      )}
    </Box>
  );
};

export default TaskList;
