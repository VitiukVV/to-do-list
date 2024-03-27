import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setStatusFilter } from '../../store/toDoSlice/slice';

const StatusFilter = () => {
  const dispatch = useAppDispatch();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterChange = (filter: string) => {
    dispatch(setStatusFilter(filter));
    setActiveFilter(filter);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={() => filterChange('all')}
        color={activeFilter === 'all' ? 'primary' : 'inherit'}
      >
        All
      </Button>
      <Button
        variant="contained"
        onClick={() => filterChange('pending')}
        color={activeFilter === 'pending' ? 'primary' : 'inherit'}
      >
        Pending
      </Button>
      <Button
        variant="contained"
        onClick={() => filterChange('in progress')}
        color={activeFilter === 'in progress' ? 'primary' : 'inherit'}
      >
        In progress
      </Button>
      <Button
        variant="contained"
        onClick={() => filterChange('completed')}
        color={activeFilter === 'completed' ? 'primary' : 'inherit'}
      >
        Completed
      </Button>
    </Stack>
  );
};

export default StatusFilter;
