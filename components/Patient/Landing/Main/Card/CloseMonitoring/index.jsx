import { Box, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <Box
            borderRadius={'15px'}
            // boxShadow={'0px 0px 1px 1px rgba(150,150,150,0.75)'}
            // boxShadow={'1px 1px 1px 0px '}
            // border={'1px solid #fafcfe'}
            // width={'30vw'}
            height={'35vh'}
            paddingX={'2vw'}
            paddingY={'2vh'}
            bgcolor={'white'}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography
                    fontFamily={'Poppins'}
                >
                    Blood Pressure
                </Typography>
                <select
                    style={{
                        border: '1px solid grey',
                        borderRadius: '20px'
                    }}
                >
                    <option>
                        Weekly
                    </option>
                    <option>
                        BiWeekly
                    </option>
                    <option>
                        Monthly
                    </option>
                </select>
            </Box>
            <Box
                display={'flex'}
                gap={'30px'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                >
                    <Box
                        width={'10px'}
                        height={'10px'}
                        bgcolor={'#8661c7'}
                        borderRadius={'50%'}
                    >

                    </Box>
                    <Typography
                        fontFamily={'10px'}
                        color={'rgba(0, 0, 0, 0.65)'}
                    >
                        Systolic
                    </Typography>
                </Box>

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                >
                    <Box
                        width={'10px'}
                        height={'10px'}
                        bgcolor={'#4197d7'}
                        borderRadius={'50%'}
                    >

                    </Box>
                    <Typography
                        fontFamily={'10px'}
                        color={'rgba(0, 0, 0, 0.65)'}
                    >
                        Diastolic
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Index
