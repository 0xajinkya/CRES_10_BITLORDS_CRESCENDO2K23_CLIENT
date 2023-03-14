import React from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { Box, Button } from '@mui/material';
// import Heart from '../components/Patient/Graph/Heart'
import Heart from '../components/Patient/Graph/Heart';
import Sugar from '../components/Patient/Graph/Sugar';
import { Home, Logout, Timeline } from '@mui/icons-material';
import { useRouter } from 'next/router';



const Index = () => {

  const data = [
    {
      "name": "Mon",
      "sys": 160,
        "dia": 98,
      //"amt": 2400
    },
    {
      "name": "Tue",
      "sys": 170,
        "dia": 105,
      //"amt": 2210
    },
    {
      "name": "Wed",
      "sys": 165,
        "dia": 110,
      //"amt": 2290
    },
    {
      "name": "Thu",
      "sys": 162,
        "dia": 120,
      //"amt": 2000
    },
    {
      "name": "Fri",
      "sys": 175,
        "dia": 99,
      //"amt": 2181
    },
    {
      "name": "Sat",
      "sys": 172,
        "dia": 105,
      //"amt": 2500
    },
    {
      "name": "Sun",
      "sys": 168,
        "dia": 100,
      //"amt": 2100
    }
  ]
  const router = useRouter();
  return (
    <Box>
      <Box
            sx={{
              backgroundColor: 'white',
              // borderRadius: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingLeft: '2.5vw',
              gap: '5vh',
              paddingY: '1vh'
            }}
          >
            <Button
              sx={{
                color: '#089AA4',
                
      
              }}
              onClick={() => router.push('/')}
            >
              <Home sx={{ marginRight:'0.5vw'}} />
              Home
            </Button>

            <Button
              sx={{
                color: '#089AA4'
              }}
              onClick={() => router.push('/sensorData')}
            >
              <Timeline  sx={{ marginRight:'0.5vw'}}/>
              Sensor Data
            </Button>
            <Button
              sx={{
                color: '#089AA4'
              }}
              onClick={() => {localStorage.removeItem('patient');router.push('/authenticate')}}
            >
              <Logout sx={{ marginRight:'0.5vw'}} />
              Logout
            </Button>
          </Box>
    <Box
    
    sx={{
      display:'flex',
      flexDirection:'row',
      // justifyContent:'center',
      alignItems:'center',
      height:'50vh',
      width:'100vw',

    }}>
      <Box
        mt={1}
      >
        <AreaChart width={400} height={180} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorsys" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colordia" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4197d7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4197d7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="sys" stroke="#8884d8" fillOpacity={1} fill="url(#colorsys)" />
          <Area type="monotone" dataKey="dia" stroke="#82ca9d" fillOpacity={1} fill="url(#colordia)" />
        </AreaChart>
      </Box>
      <Box>
        <Heart />
      </Box>
      <Box>
        < Sugar/>
        
      </Box>
      
    </Box>

    



    </Box>
  )
}

export default Index
