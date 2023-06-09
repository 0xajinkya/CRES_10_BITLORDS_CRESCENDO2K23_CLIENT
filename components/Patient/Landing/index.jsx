import React from 'react'
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Main from './Main';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Appointments from '../Appointments';
import Suggest from '../Suggest';

const Index = () => {

  const router =useRouter();

  return (
    <Box
        sx={{
            display: 'flex',
        }}
    >
        <Sidebar />
        {router.asPath === '/' && <Main />}
        {router.asPath === '/appointments' && <Appointments />}
        {router.asPath === '/suggest' && <Suggest />}
        <Rightbar />
    </Box>
  )
}

export default Index
