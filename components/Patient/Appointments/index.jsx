import { Box, Typography } from '@mui/material'
import React from 'react'
import CurrentAppointment from './CurrentAppointment';
import PastAppointment from './PastAppointment';
import ArchiveIcon from '@mui/icons-material/Archive';

const Index = () => {
  return (
    <Box
      sx={{
        flex: 9,
        minHeight: '100vh',
        paddingX: '2vw',
        paddingTop: '3vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1vh',
        backgroundColor:'#ecf5ff'
      }}
    >
     
      
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '3vh',
          gap: '2vw'
        }}
      >
       
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'2vh'}
          flex={1}
        >
          
          <CurrentAppointment />
        </Box>
      </Box>
      <PastAppointment/>
    </Box>
  )
}

export default Index
