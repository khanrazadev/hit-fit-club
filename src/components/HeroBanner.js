import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      color="gray"
      fontWeight="600"
      fontSize="26px"
      fontFamily={"monospace"}
    >
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      fontFamily={"monospace"}
      color={"gray"}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      color={"gray"}
      fontSize="22px"
      fontFamily="monospace"
      lineHeight="35px"
    >
      Get ready for some workout awesomeness tailored just for you!
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "300px",
          textAlign: "center",
          background: "crimson",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "black",
          borderRadius: "4px",
        }}
      >
        Let's Get Moving
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="crimson"
      sx={{
        opacity: "0.5",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
