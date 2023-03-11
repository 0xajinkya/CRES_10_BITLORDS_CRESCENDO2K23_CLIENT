import { Box } from '@mui/material'
import React from 'react'
// import InputBase from '@mui/material/InputBase';i
import Drawer from '../Drawer';

const Index = () => {
  return (
    <Box
        sx={{
            flex: 1.5,
            bgcolor: 'red',
            minHeight: '100vh',

            backgroundColor:'white',
            borderRight: '1px solid #bdbdbd'

        }}
    >
      <Drawer/>
    </Box>
  )
}

export default Index
