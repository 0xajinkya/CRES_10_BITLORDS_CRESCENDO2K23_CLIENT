import React from 'react'
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Main from './Main';
import { Box } from '@mui/material';

const Index = () => {
  return (
    <Box
        sx={{
            display: 'flex',
        }}
    >
        <Sidebar />
        <Main />
        <Rightbar />
    </Box>
  )
}

export default Index
