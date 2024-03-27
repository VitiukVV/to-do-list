import { Box, Typography } from '@mui/material';
import StatusFilter from '../statusFilter/StatusFilter';
import TaskCounter from '../taskCounter/TaskCounter';

const TaskBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        mb: 4,
        justifyContent: 'space-between',
      }}
    >
      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Typography component="h2" variant="h4">
          Tasks
        </Typography>
        <TaskCounter />
      </Box>
      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Typography component="h2" variant="h4">
          Filter by status
        </Typography>
        <StatusFilter />
      </Box>
    </Box>
  );
};

export default TaskBar;
