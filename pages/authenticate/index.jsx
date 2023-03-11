import { Box, Button, InputBase, Typography } from '@mui/material'
import React from 'react'
import Lottie from 'lottie-react';
import Login from '../../lotties/Login.json'
import { Email, Lock } from '@mui/icons-material';

const Index = () => {
  return (
    <Box>
      <Typography
        fontFamily={'Ubuntu'}
        fontSize={'50px'}
        textAlign={'center'}
        color={'#089AA4'}
        height={'10vh'}
        mt={3}
      >
        Healthifiers
      </Typography>
      <Box
        minHeight={'90vh'}
        minWidth={'100vw'}
        display={'flex'}
        
      >
        <Box
          flex={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}

        >
          <Lottie 
            animationData={Login}
            style={{
              height: '400px'
            }}
          />
        </Box>
        <Box
          flex={1}
          display={'flex'}
          flexDirection={'column'}
          gap={'3vh'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            fontFamily={'Poppins'}
            fontSize={'20px'}
          >
            Login
          </Typography>
          <InputBase 
            startAdornment={<Email 
              sx={{
                color: 'grey',
                mx: 2
              }}
            />}
            placeholder='Email'
            sx={{
              border: '1px solid #089AA4',
              paddingX: '10px',
              paddingY: '5px',
              borderRadius: '25px',
              width: '20vw',
              color: 'black',
              mt: 1
            }}
          />
          
          <InputBase 
            startAdornment={<Lock 
              sx={{
                color: 'grey',
                mx: 2
              }}
            />}
            placeholder='Email'
            sx={{
              border: '1px solid #089AA4',
              paddingX: '10px',
              paddingY: '5px',
              borderRadius: '25px',
              width: '20vw',
              color: 'black'
            }}
          />
          <Button
            sx={{
              border: '1px solid #089AA4',
              paddingX: '20px',
              borderRadius: '20px',
              color: '#089AA4',
              backgroundColor: '#089AA4',
              color: 'white',
              mt: 2,
              ":hover": {
                backgroundColor: 'white',
                color: '#089AA4'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
