import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { ArrowLeft } from "@mui/icons-material";

const Index = () => {

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const patient = localStorage.getItem('patient')

    setPatient(JSON.parse(patient));
  }, [])

  return (
    <>
      {patient === null ?
        <Box
          minWidth={'100vw'}
          minHeight={'100vh'}
          margin={'auto'}
        >
          <CircularProgress />
        </Box>
        :
        <Box
          px={2}
          sx={{
            flex: 3,
            bgcolor: "white",
            marginY: '30px',
            borderRadius: '20px',
            marginRight: '20px',
            paddingBottom: '20px'
          }}
        >
          <Box
            flex={1}
            display="flex"
            gap={['6vh," " ,10vh']}
            justifyContent="space-between"
            alignItems={"screenLeft"}
            mt={2}
          >
            <ArrowCircleLeftIcon
              sx={{
                color: "rgba(0, 0, 0, 0.2)",
                fontSize: "35px",
              }}
            />
            <Box
              display={'flex'}
              gap={'0.7vw'}
            >
              <CircleNotificationsIcon
                sx={{
                  color: "rgba(0, 0, 0, 0.2)",
                  fontSize: "35px",
                }}
              />
              <CreateIcon
                sx={{
                  color: "rgba(0, 0, 0, 0.2)",
                  fontSize: "35px",
                }}
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Avatar
              sx={{
                bgcolor: "purple",
                width: "70px",
                height: "70px",
                margin: "auto",
                fontSize: "20px",
              }}
            >
              {patient?.name[0]}
            </Avatar>
            <Typography
              textAlign="center"
              marginTop={"30px"}
              fontFamily={'Ubuntu'}
              fontWeight={600}
              fontSize={'25px'}
            >
              {patient?.name}
            </Typography>
            <Typography marginTop={"auto"} textAlign="center">
              35 years
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            paddingX={"1vw"}
            marginY={"30px"}
          >
            <Box display={"flex"} flexDirection={"column"}
              textAlign={'center'}
            >
              <Typography>
                Blood
                <br />
                <Typography color={"#089aa4"} textAlign={'center'}>{patient?.bloodGroup}</Typography>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: "55px",
              }}
            />
            <Box display={"flex"} flexDirection={"column"}
              textAlign={'center'}
            >
              <Typography>
                Height
                <br />
                <Typography color={"#089aa4"}>{patient?.height}cm</Typography>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: "55px",
              }}
            />
            <Box display={"flex"} flexDirection={"column"}
              textAlign={'center'}
            >
              <Typography>
                Weight
                <br />
                <Typography color={"#089aa4"}>{patient?.weight}KG</Typography>
              </Typography>
            </Box>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection={'column'}
            gap={['6vh," " ,10vh']}
            justifyContent="space-between"
            alignItems={"screenLeft"}
            bgcolor={'transparent'}
          >
            <Card
              sx={{
                borderRadius: '20px'
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  paddingX={'0.8vw'}
                >
                  <Box>
                    <Typography sx={{ fontSize: "16px", fontFamily: 'Poppins', fontWeight: '600', color: "black" }}>
                      Dr.Pawel Kowalski
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px'
                      }}
                    >
                      02.11.2022
                    </Typography>
                  </Box>
                  <InboxIcon
                    sx={{
                      color: "#089aa4",
                      fontSize: "25px",
                    }}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  sx={{
                  }}
                />
                <Box>
                  <Typography paddingX={"1vw"}
                    fontFamily={'Poppins'}
                    fontWeight={600}
                    fontSize={'17px'}
                  >
                    Hello <span
                      style={{
                        color: '#089AA4'
                      }}
                    >{patient.name.split(' ')[0]}</span>
                    <br />
                    <Typography marginTop={"5px"}
                      fontFamily={'Poppins'}
                      fontSize={'13.5px'}
                    >
                      Your test Result are pretty fine.
                      But I&apos;ll prescribe somting....to keep the condition under
                      control
                    </Typography>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            {/* <Box>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                border: '1px solid #089AA4',
                borderRadius: '20px',
                paddingX: '20px',
                paddingY: '5px',
                fontSize: '13px'
              }}
            >
              <SickOutlinedIcon />
              Diseases
            </Button>
            <Button

              startIcon={<LocalHospitalOutlinedIcon />}
            >
              My visits
            </Button>
            <Button startIcon={<FavoriteBorderIcon />}>
              Health Monitor
            </Button>
          </Stack>
        </Box> */}
            <Box
              display={'flex'}
              flexDirection={'column'}
              mt={3}
              gap={'1vw'}
            // alignItems={'flex-start'}
            // paddingLeft={'5vw'}
            >
              <Button
                sx={{
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: '3vw',
                  borderRadius: '10px',
                  gap: '1vw',
                  color: '#089AA4',
                  paddingY: '15px',
                  ":hover": {
                    backgroundColor: '#089AA4',
                    color: 'white'
                  }
                }}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  gap={'0.7vw'}
                >
                  <SickOutlinedIcon />
                  Diseases
                </Box>
                <ArrowLeft
                  sx={{
                    transform: 'rotate(180deg)'
                  }}
                />

              </Button>
              <Button
                sx={{
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: '3vw',
                  borderRadius: '10px',
                  gap: '1vw',
                  color: '#089AA4',
                  paddingY: '15px',
                  ":hover": {
                    backgroundColor: '#089AA4',
                    color: 'white'
                  }
                }}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  gap={'0.7vw'}
                >
                  <LocalHospitalOutlinedIcon />
                  My Visits
                </Box>
                <ArrowLeft
                  sx={{
                    transform: 'rotate(180deg)'
                  }}
                />
              </Button>
              <Button sx={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '3vw',
                borderRadius: '10px',
                gap: '1vw',
                color: '#089AA4',
                paddingY: '15px',
                ":hover": {
                  backgroundColor: '#089AA4',
                  color: 'white'
                }
              }}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  gap={'0.7vw'}
                >
                  <FavoriteBorderIcon />
                  Health Monitor

                </Box> <ArrowLeft
                  sx={{
                    transform: 'rotate(180deg)'
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
};

export default Index;
