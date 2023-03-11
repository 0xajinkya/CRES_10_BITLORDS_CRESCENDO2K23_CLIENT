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
            // paddingX: '1vw'
        }}
    >
        <Sidebar />
        <Main />
        <Rightbar />
    </Box>
  )
}

export default Index
