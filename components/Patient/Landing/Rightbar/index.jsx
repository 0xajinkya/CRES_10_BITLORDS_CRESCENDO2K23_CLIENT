import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";

const Index = () => {
  return (
    <Box
      sx={{
        flex: 3
        ,
        bgcolor: "normal",
        // width:'vw'
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
          }}
        />
        <Box>
          <CircleNotificationsIcon
            sx={{
              color: "grey",
              fontSize: "35px",
            }}
          />
          <CreateIcon
            sx={{
              color: "grey",
              fontSize: "35px",
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
        gap={['6vh," " ,10vh']}
        justifyContent="space-between"
        alignItems={"screenLeft"}
      >
        <Card>
          <CardContent>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
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
      </Box>
    </Box>
  );
};

export default Index;
