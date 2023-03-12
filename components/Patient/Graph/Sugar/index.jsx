import React from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { Box } from '@mui/material';

const Index = () => {

    const data = [
        {
            "name": "Mon",
            "sys": 160,
            //   "dia": 98,
            //"amt": 2400
        },
        {
            "name": "Tue",
            "sys": 170,
            //   "dia": 105,
            //"amt": 2210
        },
        {
            "name": "Wed",
            "sys": 165,
            //   "dia": 110,
            //"amt": 2290
        },
        {
            "name": "Thu",
            "sys": 162,
            //   "dia": 120,
            //"amt": 2000
        },
        {
            "name": "Fri",
            "sys": 175,
            //   "dia": 99,
            //"amt": 2181
        },
        {
            "name": "Sat",
            "sys": 172,
            //   "dia": 105,
            //"amt": 2500
        },
        {
            "name": "Sun",
            "sys": 168,
            //   "dia": 100,
            //"amt": 2100
        }
    ]

    return (
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
    )
}

export default Index
