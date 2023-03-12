import { Box, Typography } from '@mui/material'
import React from 'react'
import NextAppointment from '../../Landing/Main/Card/NextAppointment';


const Index = () => {
  return (
    <Box
      sx={{
        flex: 9,
        // minHeight: '100vh',
        paddingX: '0vw',
        paddingTop: '1vh',
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
          <Typography
            fontFamily={'Poppins'}
            fontWeight={'500'}
            fontSize={'18px'}
          >
            Upcoming Appointment
          </Typography>
          <NextAppointment />
        </Box>
      </Box>
 
    </Box>
  )
}

export default Index
