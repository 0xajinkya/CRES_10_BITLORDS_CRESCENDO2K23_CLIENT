import { Search, Share } from '@mui/icons-material';
import { Box, Button, InputBase, Typography } from '@mui/material';
import React from 'react'
import Table from './Table';

const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '20px',
        mt: 2,
        paddingX: '2vw',
        paddingY: '2vh',
        height: '60vh',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        gap: '3vh'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 500
            }}
          >
            Prescriptions
          </Typography>
          <InputBase
            placeholder='Search..'
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              width: '10vw',
              paddingX: '10px',
              // paddingY: '2px',
              color: 'grey'
            }}
            startAdornment={<Search
              sx={{
                color: 'rgba(0, 0, 0, 0.2)',
                mr: 1
              }}
            />}
          />
        </Box>
        <Box
        >
          <Button
            sx={{
              display: 'flex',
              gap: '10px',
              color: '#089AA4',
              borderRadius: '20px',
              paddingX: '20px',
              border: '1px solid white',
              backgroundColor: 'transparent',
              ":hover": {
                border: '1px solid #089AA4',
              }
            }}
          >
            <Share
              sx={{
                color: '#089AA4',
              }}
            />
            Share
          </Button>
        </Box>
      </Box>
      <Table />
    </Box>
  )
}

export default Index
