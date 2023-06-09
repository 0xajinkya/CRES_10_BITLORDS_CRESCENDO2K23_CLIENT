import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import CloseMonitoring from './Card/CloseMonitoring';
import NextAppointment from './Card/NextAppointment';
import History from './History';

const Index = () => {

  const [patient, setPatient] = useState();

    useEffect(() => {
        const patients = localStorage.getItem('patient')
        console.log(patients)
        setPatient(JSON.parse(patients));
    }, [])

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
      <Typography
        sx={{
          fontSize: '30px',
          fontFamily: 'Ubuntu',
          fontWeight: 500
        }}
      >
        Welcome, {patient?.name}
      </Typography>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontFamily: 'Poppins'
        }}
      >
        You&apos;ve got a message from Dr. Pawel. Check your inbox!
        <ArchiveIcon
          sx={{
            color: '#089aa4'
          }}
        />
      </Typography>
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
            Close Monitoring
          </Typography>
          <CloseMonitoring />
        </Box>
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
            Next Appointment
          </Typography>
          <NextAppointment />
        </Box>
      </Box>
      <History />
    </Box>
  )
}

export default Index
