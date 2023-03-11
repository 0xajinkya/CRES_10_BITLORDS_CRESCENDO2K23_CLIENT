import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'; import { Avatar, Box, Button, MenuItem, Select, Typography } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Index = () => {

    const [patient, setPatient] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        const patients = localStorage.getItem('patient')
        console.log(patients)
        setPatient(JSON.parse(patients));
    }, [])

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/appointment/get?id=${patient?.appointments[0]}`)
                console.log(res.data)
                setDetails(res.data);
            } catch (error) {
                console.log('No appoinments for today!')
            }
        }
        fetchDetails();
    }, [patient])

    return (
        <Box
            borderRadius={'15px'}
            height={'35vh'}
            paddingX={'2vw'}
            paddingY={'2vh'}
            paddingBottom={'3.5vh'}
            bgcolor={'white'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
        >
            <Typography
                fontSize={'22px'}
                fontWeight={500}
                fontFamily={'Poppins'}
            >
                {details?.date}
            </Typography>
            <Typography
                display={'flex'}
                alignItems={'center'}
                gap={'5px'}
                fontSize={'13px'}
                color={'grey'}
            >
                <QueryBuilderIcon
                    sx={{
                        fontSize: '15px'
                    }}
                />
                {details?.fromTime} - {details?.toTime}
            </Typography>
            <Typography
                display={'flex'}
                alignItems={'center'}
                gap={'5px'}
                fontSize={'13px'}
                color={'grey'}
                width={'70%'}

            >
                <GpsFixedIcon
                    sx={{
                        fontSize: '15px',
                    }}
                />
                {details?.destination}
            </Typography>
            <Box
                display={'flex'}
                gap={'1vw'}
            >
                <Avatar>
                    {details?.docName[0]}{details?.docName?.split(' ')[1][0]}
                </Avatar>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                >
                    <Typography>
                        {details?.docName}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'grey',
                            fontSize: '13px'
                        }}
                    >
                        {details?.docField}
                    </Typography>
                </Box>
            </Box>

            <Box
                display={'flex'}
                justifyContent={'space-between'}
                gap={'5%'}
            >
                <Button
                    sx={{
                        border: '1px solid #089aa4',
                        color: '#089aa4',
                        width: '50%',
                        ":hover": {
                            backgroundColor: '#089aa4',
                            color: 'white'
                        }
                    }}
                >
                    Reschedule
                </Button>
                <Button
                    sx={{
                        backgroundColor: '#089aa4',
                        color: 'white',
                        width: '50%',
                        border: '1px solid #089aa4',
                        ":hover": {
                            backgroundColor: 'white',
                            color: '#089aa4'
                        }
                    }}
                >
                    Details
                </Button>
            </Box>
        </Box>
    )
}

export default Index
