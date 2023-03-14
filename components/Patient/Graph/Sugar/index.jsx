import React from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { Box, Typography } from '@mui/material';

const Index = () => {

    const data = [
        {
            "name": "Mon",
            "Mmol/L": 160,
            //   "dia": 98,
            //"amt": 2400
        },
        {
            "name": "Tue",
            "Mmol/L": 190,
            //   "dia": 105,
            //"amt": 2210
        },
        {
            "name": "Wed",
            "Mmol/L": 250,
            //   "dia": 110,
            //"amt": 2290
        },
        {
            "name": "Thu",
            "Mmol/L": 130,
            //   "dia": 120,
            //"amt": 2000
        },
        {
            "name": "Fri",
            "Mmol/L": 175,
            //   "dia": 99,
            //"amt": 2181
        },
        {
            "name": "Sat",
            "Mmol/L": 300,
            //   "dia": 105,
            //"amt": 2500
        },
        {
            "name": "Sun",
            "Mmol/L": 120,
            //   "dia": 100,
            //"amt": 2100
        }
    ]

    return (
        <Box
            mt={1}
            // sx={{backgroundColor:'black'}}
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
                <Area type="monotone" dataKey="Mmol/L" stroke="#8884d8" fillOpacity={1} fill="url(#colorsys)" />
                {/* <Area type="monotone" dataKey="dia" stroke="#82ca9d" fillOpacity={1} fill="url(#colordia)" /> */}
            </AreaChart>



            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                }}
            >

                <Typography
                
                       

                >
                    
                        Weekly Report of Sugar Test 
                        <br />

                        Unit :-  (bpm)

                    </Typography>           
            </Box>

        </Box>
    )
}

export default Index
