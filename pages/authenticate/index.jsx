import { Alert, Box, Button, InputBase, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import Login from '../../lotties/Login.json'
import { Email, Lock } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [patient, setPatient] = useState();

  const handleLogin = async () => {
    // console.log(details)
    try {
      const res = await axios.post(`http://localhost:5001/patient/login?email=${details.email}`, {
        password: details.password
      })
      console.log(res.data)
      if (res.data) {
        localStorage.setItem('patient', JSON.stringify(res.data))
        setSuccess(true)
        setTimeout(() => {
          router.replace('/');
        }, 2000)
        router.push('/');
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error)
      setError(true);
    }
  }

  const [details, setDetails] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if(error === true){
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [error])

  useEffect(() => {
    if(success === true){
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
    }
  }, [error])


  useEffect(() => {
    const patient = localStorage.getItem('patient');
    setPatient(JSON.parse(patient));
  }, [])

  if(patient){
    router.replace('/')
    return;
  }

  return (
    <Box>
      <Snackbar
        open={error}
        autoHideDuration={3000}
      >
      <Alert severity="error" >Email or password incorrect try again!</Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={1500}
      >
      <Alert severity="success" >Log in successful</Alert>
      </Snackbar>
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
            name='email'
            onChange={handleChange}
          />

          <InputBase
            startAdornment={<Lock
              sx={{
                color: 'grey',
                mx: 2
              }}
            />}
            placeholder='Password'
            sx={{
              border: '1px solid #089AA4',
              paddingX: '10px',
              paddingY: '5px',
              borderRadius: '25px',
              width: '20vw',
              color: 'black'
            }}
            name='password'
            onChange={handleChange}
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
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
