import { Box } from '@mui/material'
import React from 'react'
import CurrentAppointment from './CurrentAppointment';
import PastAppointment from './PastAppointments';

const Index = () => {
  return (
    <Box
        flex={9}
    >
        <CurrentAppointment />
        <PastAppointment />
    </Box>
  )
}

export default Index
