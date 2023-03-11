import { Search, Sick } from '@mui/icons-material'
import { Box, CircularProgress, InputBase, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Index = () => {

    const [prompt, setPrompt] = useState();
    const [res, setRes] = useState();
    const [loading, setLoading] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await axios.post(`http://localhost:5001/chat/chat`, { prompt: prompt })
        console.log(res.data)
        setLoading(false);
        setRes(res.data);
    }

    return (
        <Box
            flex={9}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            paddingX={'20px'}
            paddingY={'20px'}
        >
            <Box>
                <Typography
                    sx={{
                        textAlign: 'center',
                        mb: 3,
                        fontSize: '30px',
                        fontFamily: 'Ubuntu'
                    }}
                >
                    Smart Medicine Suggestion
                </Typography>
                <Box
                    backgroundColor={'white'}
                    height={'30vh'}
                    borderRadius={'20px'}
                    paddingX={'20px'}
                    paddingY={'15px'}
                >
                    {loading ?
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            height={'25vh'}
                        >
                            <CircularProgress />
                        </Box>
                        :
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '15px'
                            }}
                        >
                            {res}
                        </p>
                    }
                </Box>
            </Box>
            <Box
                paddingX={'20px'}
                mb={1}
            >
                <form
                    onSubmit={handleSubmit}
                >
                    <InputBase
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder='Enter Your Symptoms'
                        startAdornment={<Sick
                            sx={{
                                color: 'rgba(0, 0, 0, 0.25)',
                                mr: 3
                            }}
                        />}
                        sx={{
                            border: '1px solid #089AA4',
                            width: '100%',
                            backgroundColor: 'white',
                            paddingX: '10px',
                            borderRadius: '20px',
                            paddingY: '5px'
                        }}
                    />
                </form>
            </Box>
        </Box>
    )
}

export default Index
