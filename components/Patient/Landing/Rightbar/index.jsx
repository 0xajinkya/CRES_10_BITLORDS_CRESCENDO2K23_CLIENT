import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { ArrowLeft } from "@mui/icons-material";

const Index = () => {
  return (
    <Box
      px={2}
      sx={{

        flex: 3,
        bgcolor: "normal",
        flex: 3,
        bgcolor: "white",

      }}
    >
      <Box
        flex={1}
        display="flex"
        gap={['6vh," " ,10vh']}
        justifyContent="space-between"
        alignItems={"screenLeft"}
      >
        <ArrowCircleLeftIcon
          sx={{
            color: "grey",
            fontSize: "35px",
            marginTop:'1vh'
          }}
        />
        <Box
        sx={{

    
          marginTop:'1vh'
        }}
        >
          <CircleNotificationsIcon
            sx={{
              color: "grey",
              fontSize: "30px",
            }}
          />
          <CreateIcon
            sx={{
              color: "grey",
              fontSize: "25px",
            }}
          />
        </Box>
      </Box>
      <Box mt={10}>
        <Avatar
          sx={{
            bgcolor: "purple",
            width: "100px",
            height: "100px",
            margin: "auto",
            fontSize: "20px",
          }}
        >
          M
        </Avatar>
        <Typography
          fontSize={["15px", "25px"]}
          textAlign="center"
          marginTop={"30px"}
        >
          Monika Wrobel
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
        <Box display={"flex"} flexDirection={"column"}>
          <Typography>
            Blood
            <br />
            <Typography color={"#089aa4"}>A Rh+</Typography>
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            height: "55px",
          }}
        />
        <Box display={"flex"} flexDirection={"column"}>
          {" "}
          <Typography>
            Height
            <br />
            <Typography color={"#089aa4"}>160cm</Typography>
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            height: "55px",
          }}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography>
            weight
            <br />
            <Typography color={"#089aa4"}>22kg</Typography>
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
        <Card>
          <CardContent>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography sx={{ fondsiz: "14px", color: "black" }}>
                  Dr.Pawel Kowalski
                </Typography>
                <Typography>02.11.2022</Typography>
              </Box>
              <InboxIcon
                sx={{
                  color: "#089aa4",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Divider
              orientation="horizontal"
              sx={{
                height: "60px",
              }}
            />
            <Box>
              <Typography paddingX={"1vw"}>
                Hello Monical
                <br />
                <Typography marginTop={"20px"}>
                  your test Result are pretty fine.
                  <br />
                  But I will prescribe somting....to keep the condition under
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
        paddingBottom={'1vw'}
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


  );
};

export default Index;
