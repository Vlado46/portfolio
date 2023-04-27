import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../assets/images/20230425_220035.jpeg";
import CV from "../assets/cv/Vladimir_Basheski_Resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  return (
    <section id="home">
      <Stack direction="row" paddingY={20} marginBottom={6} gap={12}>
        <Box>
          <img className="profile-img" src={image} />
        </Box>
        <Stack gap={5} justifyContent="flex-start">
          <Typography variant="h1" fontWeight="bold" color="secondary">
            Hi, i'm Vlado!
          </Typography>
          <Typography variant="h5">
            A web developer based in Skopje. Working towards creating software
            with passion for functional and responsive design.
          </Typography>
          <Box component="span">
            <Button variant="contained" color="secondary" href={CV} download>
              <DownloadIcon />
              <Typography marginLeft={1}>Download CV</Typography>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
};

export default Home;
