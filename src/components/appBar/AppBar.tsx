import { Box, Tab, Tabs } from '@mui/material';
import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Loader from '../loader/Loader';

const AppBar = () => {
  const location = useLocation();

  return (
    <>
      <Box component="header">
        <Box
          component="nav"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tabs
            value={location.pathname}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Weather" value="/" component={NavLink} to="/" />
            <Tab
              label="To Do List"
              value="/toDo"
              component={NavLink}
              to="/toDo"
            />
          </Tabs>
        </Box>
      </Box>
      <Box component="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default AppBar;
