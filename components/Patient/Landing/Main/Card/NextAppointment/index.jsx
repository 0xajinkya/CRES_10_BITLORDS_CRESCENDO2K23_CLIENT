import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'; import { Avatar, Box, Button, MenuItem, Select, Typography } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import React from 'react'

const Index = () => {
    return (
        <Box
            borderRadius={'15px'}
            // boxShadow={'0px 0px 1px 1px rgba(150,150,150,0.75)'}
            // boxShadow={'1px 1px 1px 0px '}
            // border={'1px solid #fafcfe'}
            width={'30vw'}
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
                Friday, 19th March
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
                11:30 - 12:00 pm(30 min)
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
                Apollo Hospital, Dariya Road, Safarnama Colony, Asgard
            </Typography>
            <Box
                display={'flex'}
                gap={'1vw'}
            >
                <Avatar
                    src={'https://th.bing.com/th/id/OIP.jgxuVfmR9tNZSfSya-V-fwHaKm?pid=ImgDet&rs=1'}
                />
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                >
                    <Typography>
                        Dr. Strange
                    </Typography>
                    <Typography
                        sx={{
                            color: 'grey',
                            fontSize: '13px'
                        }}
                    >
                        Cardiologist
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
