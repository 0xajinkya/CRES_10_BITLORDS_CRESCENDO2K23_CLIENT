import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CurrentAppointment from './CurrentAppointment';
import PastAppointment from './PastAppointment';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Home, Logout, Timeline } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Index = () => {

  const router = useRouter();

  return (
    <Box
      sx={{
        paddingX: '2vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#ecf5ff'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Ubuntu',
          fontSize: '30px',
          mt: 1,

        }}
      >
        Appointments
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: '2vw'
        }}
      >
       <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'2vh'}
          // flex={1}
        >
          
          <CurrentAppointment />
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: '2.5vw',
              gap: '1vh',
              paddingY: '1vh'
            }}
          >
            <Button
              sx={{
                color: '#089AA4'
              }}
              onClick={() => router.push('/')}
            >
              <Home />
              Home
            </Button>

            <Button
              sx={{
                color: '#089AA4'
              }}
              onClick={() => router.push('/sensorData')}
            >
              <Timeline />
              Sensor Data
            </Button>
            <Button
              sx={{
                color: '#089AA4'
              }}
              onClick={() => {localStorage.removeItem('patient');router.push('/authenticate')}}
            >
              <Logout />
              Logout
            </Button>
          </Box>
        </Box>
        <Box
          flexGrow={1}
        >
      <PastAppointment/>

        </Box>
      </Box>
    </Box>
  )
}

export default Index
